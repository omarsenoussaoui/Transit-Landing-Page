// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Set your real domain here before deploying (used for canonical / hreflang links)
  site: 'https://www.example.com',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
