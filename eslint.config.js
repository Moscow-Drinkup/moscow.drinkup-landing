import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import effector from 'eslint-plugin-effector';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules', '.agents', '.astro'],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  astro.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    // configs.flat — вариант для flat config; configs['recommended-latest'] ещё в формате eslintrc
    extends: [reactHooks.configs.flat['recommended-latest']],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    // Effector — слой данных проекта. Часть правил плагина требует информации о типах,
    // поэтому здесь включён typed linting; область — только исходники под src.
    files: ['src/**/*.{ts,tsx}'],
    extends: [
      effector.flatConfigs.recommended,
      // scope — fork-корректность (обязательно для SSR/SSG), react — биндинги effector-react.
      // Пресеты future и patronum подключим, если понадобятся.
      effector.flatConfigs.scope,
      effector.flatConfigs.react,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
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
