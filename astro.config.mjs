// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
// import { defaultLocale, locales } from './src/i18n/i18n';
import mdx from '@astrojs/mdx';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://meow.carrier.express',
  trailingSlash: 'never',
  // i18n: {
  //   defaultLocale: defaultLocale,
  //   locales: locales
  // },
  integrations: [mdx(), sitemap()],
  markdown: {
    rehypePlugins: [rehypeUnwrapImages]
  },
  // redirects: {
  //   '/streets': '/neighborhoods',
  //   '/streets/[...blogPost]': '/neighborhoods/[...blogPost]'
  // },
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: 'Asap',
        cssVariable: '--font-asap',
        weights: [400, 600, 700]
      }
    ]
  }
});
