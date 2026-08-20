import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {fileURLToPath, URL} from 'node:url';

export default defineConfig({
  plugins: [react()],
  base: '/Moscow-Drinkup-landing/',
  resolve: {
    alias: {
      '~@gravity-ui/uikit': '@gravity-ui/uikit',
      '~@diplodoc/transform': '@diplodoc/transform',
      '~@gravity-ui/icons': '@gravity-ui/icons',
      url: fileURLToPath(new URL('./src/shims/url.ts', import.meta.url)),
    },
  },
});
