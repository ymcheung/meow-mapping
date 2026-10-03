// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import { locales, defaultLocale } from './src/i18n-config';
import mdx from '@astrojs/mdx';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import { unified } from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({ imageService: 'compile' }),
  compressHTML: true,
  site: 'https://mapping.meow.ymcheung.tw',
  trailingSlash: 'never',
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Asap',
      cssVariable: '--font-asap',
      weights: [400, 600, 700]
    }
  ],
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
        page !== 'https://mapping.meow.ymcheung.tw/' &&
        page !== 'https://mapping.meow.ymcheung.tw/islands' &&
        page !== 'https://mapping.meow.ymcheung.tw/temples' &&
        page !== 'https://mapping.meow.ymcheung.tw/neighborhoods' &&
        page !== 'https://mapping.meow.ymcheung.tw/tw/islands' &&
        page !== 'https://mapping.meow.ymcheung.tw/tw/temples' &&
        page !== 'https://mapping.meow.ymcheung.tw/tw/neighborhoods'
    })
  ],
  markdown: {
    processor: unified({ rehypePlugins: [rehypeUnwrapImages] })
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
  }
});
