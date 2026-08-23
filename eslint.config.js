import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules', '.agents', 'src/generated-*'],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    // configs.flat — вариант для flat config; configs['recommended-latest'] ещё в формате eslintrc
    extends: [reactHooks.configs.flat['recommended-latest']],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    // Скрипты сборки и конфиги выполняются в Node
    files: ['scripts/**/*.{js,mjs,ts}', '*.config.{js,mjs,ts}'],
    languageOptions: {
      globals: globals.nodeBuiltin,
    },
  },
  // Отключает правила форматирования, конфликтующие с Prettier — всегда последним
  prettier,
);
