# T2M — Transit M. Meharzi · Landing page

Astro + Tailwind CSS v4, static output, French (`/fr`, default) and Arabic (`/ar`, RTL).

## Commands

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview
```

## Editing content

Everything editable is in **`src/config/site.ts`**:

- `site` — phone, WhatsApp number, email, Google Maps embed/link, Web3Forms access key
- `images` — photos (free Unsplash photos for now; put your own in `public/images/` and replace the URL with e.g. `/images/port.jpg`)
- `fr` / `ar` — all page texts, including address, opening hours and the key facts under the hero (search for `TODO`)

Also:

- Put the logo at `public/logo.png` (also used as favicon and social image).
- Set your domain in `astro.config.mjs` (`site:`) before deploying.
- Get a free Web3Forms key at https://web3forms.com — submissions are emailed to the address you register.

## Structure

- `src/pages/[lang]/index.astro` — the page, generated for each language
- `src/components/` — Header, Hero, TrustBar, About, Services, Process, Contact, Footer, Wave (card-style divider)
- `src/styles/global.css` — brand colours and fonts (`@theme`)

## Quote requests & dashboard (Supabase)

Requests sent with the "Demandez votre devis" form are saved in Supabase and listed at **`/dashboard`** (login required). The Web3Forms email is still sent too once its key is set.

### One-time setup

1. Create a free project at https://supabase.com (region: Frankfurt).
2. **SQL Editor → New query**: paste `supabase/schema.sql`, replace `admin@example.com` with the dashboard email, then **Run**.
3. **Authentication → Users → Add user → Create new user**: same email + a strong password, tick **Auto Confirm User**.
4. **Authentication → Sign In / Providers → Email**: turn **off** "Allow new users to sign up".
5. Copy `.env.example` to `.env` and fill in `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY` (**Project Settings → API**). Never use the `service_role` key.
6. Restart `npm run dev`. On your host (Netlify, Vercel…), add the same two variables under *Environment variables* and redeploy.

### Security

- Visitors (anon key) can only **insert** a request — never read, change or delete one.
- Only emails listed in the `admins` table can read/update/delete, even if another account exists.
- The dashboard is excluded from search engines (`noindex` + `robots.txt`).

### Handing over to the client

- **Same project**: transfer it to the client's Supabase organization (Project Settings → General → Transfer project). Nothing to change in the site.
- **New project**: run `supabase/schema.sql` in the client's project, create their login user, update `.env` / host variables and rebuild.
- To change the login email: update the `admins` table and the user in Authentication → Users.
