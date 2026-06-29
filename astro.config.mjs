import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://growthlocal.com',
  integrations: [
    tailwind({
      // We ship our own base layer in src/styles/global.css
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
});
