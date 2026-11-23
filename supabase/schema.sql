-- ============================================================================
--  T2M — quote requests ("Demandez votre devis") + admin dashboard access
--  Run once in Supabase: Dashboard → SQL Editor → New query → paste → Run.
--  Safe to re-run.
-- ============================================================================

-- 1. Table -------------------------------------------------------------------
create table if not exists public.demandes_devis (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  name        text not null check (char_length(name) between 2 and 120),
  company     text check (char_length(company) <= 160),
  phone       text not null check (char_length(phone) between 6 and 40),
  email       text check (char_length(email) <= 200),
  service     text not null check (char_length(service) <= 120),
  message     text not null check (char_length(message) between 2 and 5000),
  language    text not null default 'fr' check (language in ('fr', 'ar')),
  status      text not null default 'nouveau' check (status in ('nouveau', 'en_cours', 'traite'))
);

create index if not exists demandes_devis_created_at_idx on public.demandes_devis (created_at desc);

-- 2. Who may use the dashboard ------------------------------------------------
--    Only emails listed here can read requests, even if someone else manages
--    to create an account.
create table if not exists public.admins (
  email text primary key
);

-- TODO: put the dashboard login email here (same email as the user you create
--       in Authentication → Users).
insert into public.admins (email) values ('admin@example.com')
on conflict do nothing;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.admins
    where lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$$;

-- 3. Row Level Security --------------------------------------------------------
alter table public.demandes_devis enable row level security;
alter table public.admins enable row level security; -- no policies: nobody reads it via the API

-- Website visitors (anon key): may ONLY add a new request, never read anything.
drop policy if exists "public can submit a request" on public.demandes_devis;
create policy "public can submit a request"
  on public.demandes_devis for insert
  to anon
  with check (status = 'nouveau');

-- Dashboard (logged-in admin): read, update status, delete.
drop policy if exists "admin can read" on public.demandes_devis;
create policy "admin can read"
  on public.demandes_devis for select
  to authenticated
  using (public.is_admin());

drop policy if exists "admin can update" on public.demandes_devis;
create policy "admin can update"
  on public.demandes_devis for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "admin can delete" on public.demandes_devis;
create policy "admin can delete"
  on public.demandes_devis for delete
  to authenticated
  using (public.is_admin());

-- 4. Column-level grants -------------------------------------------------------
--    Visitors can only fill the form fields (not id, created_at or status).
revoke all on public.demandes_devis from anon;
grant insert (name, company, phone, email, service, message, language)
  on public.demandes_devis to anon;

revoke all on public.demandes_devis from authenticated;
grant select, delete on public.demandes_devis to authenticated;
grant update (status) on public.demandes_devis to authenticated;

revoke all on public.admins from anon, authenticated;

-- Dashboard checks the logged-in user with is_admin()
revoke all on function public.is_admin() from public, anon;
grant execute on function public.is_admin() to authenticated;
grant usage on schema public to anon, authenticated;
