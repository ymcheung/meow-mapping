// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://meow.carrier.express',
  trailingSlash: 'never',
  i18n: {
    locales: ['en', 'tw'],
    defaultLocale: 'en',
    // fallback: {
    //   tw: 'en'
    // },
    routing: {
      fallbackType: 'rewrite'
    }
  },
  integrations: [mdx(), sitemap()],
  markdown: {
    rehypePlugins: [rehypeUnwrapImages]
  },
  redirects: {
    '/temples/gotanjouji': '/temples/fukui-gotanjouji',
    '/islands/ainoshima': '/islands//fukuoka-ainoshima',
    '/islands/sanagijima': '/islands//kagawa-sanagijima',
    '/neighborhoods/enoshima': '/neighborhoods/kamakura-enoshima',
    '/temples/fushimiinaritaisha': '/temples/kyoto-fushimiinaritaisha',
    '/islands/tashirojima': '/islands/miyagi-tashirojima',
    '/neighborhoods/beppu': '/neighborhoods/oita-beppu',
    '/neighborhoods//nekonohosomichi':
      '/neighborhoods/onomichi-nekonohosomichi',
    '/temples/gokokuji': '/temples/tokyo-gokokuji',
    '/tw/gotanjouji': '/tw/temples/fukui-gotanjouji',
    '/tw/sanagijima': '/tw/islands/kagawa-sanagijima',
    '/tw/beppu': '/tw/neighborhoods/oita-beppu'
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
