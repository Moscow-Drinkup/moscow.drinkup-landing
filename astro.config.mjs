// @ts-check
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import {defineConfig} from 'astro/config';

// Превью пул-реквестов публикуются в подпапку вида /pr-preview/pr-12/,
// поэтому сборка превью запускается с заданным PR_PREVIEW_BASE (см. preview.yml).
// Для обычной сборки переменной нет и base остаётся корнем.
const base = process.env.PR_PREVIEW_BASE;

// https://astro.build/config
export default defineConfig({
  site: 'https://drinkup.moscow',
  base,
  output: 'static',
  integrations: [react(), sitemap()],
  vite: {
    resolve: {
      // Пакеты Gravity UI импортируют CSS прямо из JS, а @gravity-ui/icons —
      // соседние модули без расширения .js. При рендере на сервере эти файлы
      // выполняет Node, который ни того, ни другого не понимает, поэтому
      // отдаём пакеты Vite.
      noExternal: [/^@gravity-ui\//],
      // date-utils, наоборот, поставляется в CommonJS: под обработкой Vite он
      // падает на `exports is not defined`, поэтому остаётся внешним
      external: ['@gravity-ui/date-utils'],
      alias: {
        // page-constructor тянет свои стили через тильда-пути (наследие webpack)
        '~@gravity-ui/uikit': '@gravity-ui/uikit',
        '~@gravity-ui/icons': '@gravity-ui/icons',
        '~@diplodoc/transform': '@diplodoc/transform',
      },
    },
  },
});
