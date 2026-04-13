// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://athulya24453.github.io',
  base: '/portfolio',
  vite: {
    cacheDir: '.vite-cache',
  },
});
