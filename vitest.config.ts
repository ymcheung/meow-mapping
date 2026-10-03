/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config';
import astroConfig from './astro.config.mjs';

export default getViteConfig(
  {
    test: {
      css: true
    }
  },
  {
    ...astroConfig,
    configFile: false,
    adapter: undefined
  }
);
