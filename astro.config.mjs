// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Ganti dengan domain asli sebelum launch (dipakai untuk sitemap & canonical URL).
  site: 'https://whitescale.id',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
