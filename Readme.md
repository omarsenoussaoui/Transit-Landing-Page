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
