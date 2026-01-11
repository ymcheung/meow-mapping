// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import { locales, defaultLocale } from './src/i18n-config';
import mdx from '@astrojs/mdx';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://meow.carrier.express',
  trailingSlash: 'never',
  i18n: {
    locales: [...locales],
    defaultLocale,
    // fallback: {
    //   tw: 'en'
    // },
    routing: {
      fallbackType: 'rewrite'
    }
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        page !== 'https://meow.carrier.express/' &&
        page !== 'https://meow.carrier.express/islands' &&
        page !== 'https://meow.carrier.express/temples' &&
        page !== 'https://meow.carrier.express/neighborhoods' &&
        page !== 'https://meow.carrier.express/tw/islands' &&
        page !== 'https://meow.carrier.express/tw/temples' &&
        page !== 'https://meow.carrier.express/tw/neighborhoods'
    })
  ],
  markdown: {
    rehypePlugins: [rehypeUnwrapImages]
  },
  redirects: {
    '/temples/gotanjouji': '/temples/fukui-gotanjouji',
    '/islands/ainoshima': '/islands/fukuoka-ainoshima',
    '/islands/sanagijima': '/islands/kagawa-sanagijima',
    '/neighborhoods/enoshima': '/neighborhoods/kamakura-enoshima',
    '/temples/fushimiinaritaisha': '/temples/kyoto-fushimiinaritaisha',
    '/islands/tashirojima': '/islands/miyagi-tashirojima',
    '/neighborhoods/beppu': '/neighborhoods/oita-beppu',
    '/neighborhoods/nekonohosomichi': '/neighborhoods/onomichi-nekonohosomichi',
    '/temples/gokokuji': '/temples/tokyo-gokokuji',
    '/tw/temples/gotanjouji': '/tw/temples/fukui-gotanjouji',
    '/tw/islands/sanagijima': '/tw/islands/kagawa-sanagijima',
    '/tw/neighborhoods/beppu': '/tw/neighborhoods/oita-beppu'
  },
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
