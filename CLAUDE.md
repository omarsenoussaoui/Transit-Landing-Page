# T2M — Transit M. Meharzi · Landing page

Landing page for an Algerian customs broker (transitaire). Tagline: "Accélérateur de procédures" / "مُسرِّع الإجراءات".

## Stack & commands

- Astro 7 (static output) + Tailwind CSS v4 (`@tailwindcss/vite`, config in CSS via `@theme`)
- Supabase (quote requests + dashboard login), `@supabase/supabase-js` loaded **only** on `/dashboard`
- Fonts self-hosted via Fontsource: Barlow + Barlow Condensed (French), Cairo (Arabic)

```sh
npm run dev      # http://localhost:4321 (restart after changing .env)
npm run build    # static site in dist/
npm run preview
```

`npx astro check` prompts to install `@astrojs/check` and hangs — use `npm run build` to verify.

## Structure

- `src/config/site.ts` — **single source of truth**: contact details, photos (`images`), all FR/AR texts. Edit content here, not in components.
- `src/pages/[lang]/index.astro` — landing page, generated for `/fr` and `/ar`; `src/pages/index.astro` redirects `/` → `/fr/` (or `/ar/` for Arabic browsers)
- `src/pages/dashboard.astro` — admin page (`/dashboard`), French only, `noindex`
- `src/components/` — Header, Hero, TrustBar, About, Services, Process, Contact, Footer, Wave, Icon
- `src/lib/supabase.ts` — env config + `saveQuoteRequest()` (plain `fetch`, keeps the public page light)
- `supabase/schema.sql` — table, RLS policies, grants; re-runnable in Supabase SQL Editor
- `public/logo.svg` (main), `logo-white.svg` (dark backgrounds), `logo.png` (favicon fallback)

## Conventions

- **Bilingual + RTL**: every visible string goes in both `fr` and `ar` in `site.ts` (the `ar` object is typed as `Dict`, so missing keys fail the build). Arabic pages use `dir="rtl"`.
- Use Tailwind **logical** utilities (`ms-/me-/ps-/pe-/start-/end-/text-start/border-s`) and `rtl:` variants (e.g. `rtl:-scale-x-100` on arrows). Avoid `ml/mr/left/right`.
- Phone numbers and emails: wrap in `dir="ltr"`.
- Design: corporate logistics look, photo-led, square corners, condensed uppercase headings (FR only — Arabic has no case). Colours from the business card: `brand #1D3FCC`, `brand-deep #0F2A9A`, `navy`, `night`, `lime #B8D624` (CTAs/accents), `sky #4BA6EA`, `grey #8F9296` (logo/decoration only — fails text contrast; use `text-muted` for secondary text).
- Avoid "AI template" patterns: no blurred gradient blobs, pill badges, emoji, identical icon cards, invented stats.
- Accessibility: text contrast ≥ 4.5:1, visible focus (global `:focus-visible` styles), touch targets ≥ 44px, skip link, `prefers-reduced-motion` respected.
- Card wave (lime line + white band) is `Wave.astro`; currently used at the bottom of the Process section.

## Supabase & security

- `.env` (git-ignored) holds `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY` (publishable key). Template: `.env.example`. On the host, set the same two variables and rebuild.
- **Never** put the `service_role` / `sb_secret_` key, database password or dashboard password in code, `.env`, commits or memory.
- RLS model: `anon` may only INSERT form columns (status forced to `nouveau`); only emails in `public.admins` (checked by `is_admin()`) may SELECT/UPDATE(status)/DELETE. Sign-ups are disabled in Supabase Auth; the login user is created manually.
- Dashboard renders request data with `textContent` only (untrusted input) — never `innerHTML`. CSV export escapes formula characters.
- New `sb_publishable_` keys go in the `apikey` header only (not `Authorization: Bearer`).
- The form also posts to Web3Forms (email) once a real key replaces `YOUR_WEB3FORMS_ACCESS_KEY`; success if either destination succeeds.

## Placeholders still to replace (marked `TODO` in `site.ts`)

Email (hidden while empty), opening hours, Web3Forms key, trust facts "ports" and "24 h". Phone, WhatsApp, address, map and licence n° are the client's real details. `astro.config.mjs` `site` is `https://transit-landing-page.netlify.app` — update if a custom domain is added.

## Git

- Repo: https://github.com/omarsenoussaoui/Transit-Landing-Page (public), branch `main`.
- **No Claude attribution**: never add `Co-Authored-By: Claude` or similar to commits/PRs.
- Line endings normalized to LF via `.gitattributes`.
