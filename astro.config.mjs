// @ts-check
import { defineConfig } from 'astro/config';
import { defaultLocale, locales } from './src/i18n/i18n';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'never',
  i18n: {
    defaultLocale: defaultLocale,
    locales: locales
  },
  integrations: [mdx(), sitemap()]
});
