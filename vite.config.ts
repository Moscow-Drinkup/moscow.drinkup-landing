import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import {fileURLToPath, URL} from 'node:url';

// Встраивает JSON-LD (Organization/WebSite/Event) в index.html на этапе сборки.
// Данные приходят из src/generated-jsonld.json, который пишет scripts/fetch-events.mjs.
// Критично: schema.org-разметка должна быть в начальном HTML (AI-краулеры и
// рендеринг структурированных данных Google JS не исполняют).
function seoJsonLd() {
  return {
    name: 'seo-jsonld',
    transformIndexHtml(html: string) {
      let data;
      try {
        data = JSON.parse(fs.readFileSync('src/generated-jsonld.json', 'utf8'));
      } catch {
        return html; // файл ещё не сгенерирован (например, dev без fetch)
      }
      const blocks = [data.organization, data.website, ...(data.events ?? [])]
        .filter(Boolean)
        .map((d) => `<script type="application/ld+json">${JSON.stringify(d)}</script>`)
        .join('\n    ');
      return html.replace('</head>', `    ${blocks}\n  </head>`);
    },
  };
}

export default defineConfig({
  plugins: [react(), seoJsonLd()],
  base: './',
  resolve: {
    alias: {
      '~@gravity-ui/uikit': '@gravity-ui/uikit',
      '~@diplodoc/transform': '@diplodoc/transform',
      '~@gravity-ui/icons': '@gravity-ui/icons',
      url: fileURLToPath(new URL('./src/shims/url.ts', import.meta.url)),
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        // Ручное разделение вендоров отключено: сплит uikit/pc/react на отдельные
        // чанки ломает CJS-интероп (uikit: React.createContext undefined).
        // Ленивые роуты (React.lazy) дают отдельные чанки под-страниц и так.
      },
    },
  },
});
