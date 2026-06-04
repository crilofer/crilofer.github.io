import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://crilofer.github.io',
  base: '/',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
