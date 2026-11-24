// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Live address (used for canonical / hreflang / social links) — change if you add a custom domain
  site: 'https://transit-landing-page.netlify.app',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    build: { assetsInlineLimit: 0 },
  },
});
