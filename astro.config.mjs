// @ts-check
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import {defineConfig} from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://drinkup.moscow',
  output: 'static',
  integrations: [react(), sitemap()],
  vite: {
    resolve: {
      alias: {
        // page-constructor тянет свои стили через тильда-пути (наследие webpack)
        '~@gravity-ui/uikit': '@gravity-ui/uikit',
        '~@gravity-ui/icons': '@gravity-ui/icons',
        '~@diplodoc/transform': '@diplodoc/transform',
      },
    },
  },
});
