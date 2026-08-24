import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import astro from 'eslint-plugin-astro';
import effector from 'eslint-plugin-effector';
import pluginImport from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules', '.agents', '.astro'],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  astro.configs.recommended,
  // Проверки доступности для разметки Astro: у .astro свой синтаксис,
  // правила jsx-a11y к нему неприменимы
  astro.configs['jsx-a11y-recommended'],

  {
    files: ['**/*.{ts,tsx,astro}'],
    plugins: {'simple-import-sort': simpleImportSort, import: pluginImport},
    settings: {
      'import/resolver': {typescript: {alwaysTryTypes: true, project: './tsconfig.json'}},
    },
    rules: {
      // Импорты выстраиваются по слоям FSD: сначала внешние пакеты,
      // затем нижние слои, в конце — соседние файлы и стили
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^node:', '^react', '^@?\\w'],
            ['^@/shared'],
            ['^@/entities'],
            ['^@/features'],
            ['^@/_pages'],
            ['^\\.'],
            ['^.+\\.(css|scss)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'warn',
      'import/no-duplicates': 'error',
      'import/no-dynamic-require': 'error',

      // Качество кода
      eqeqeq: ['error', 'allow-null'],
      'no-console': ['error', {allow: ['warn', 'error', 'info']}],
      'no-else-return': 'error',
      'no-nested-ternary': 'error',
      'no-param-reassign': ['error', {props: false}],
      'no-unsafe-optional-chaining': 'error',
      'prefer-const': 'error',
      '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {destructuredArrayIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_'},
      ],
    },
  },

  {
    files: ['**/*.tsx'],
    extends: [react.configs.flat.recommended, jsxA11y.flatConfigs.recommended],
    plugins: {'react-hooks': reactHooks},
    // Версия задана явно: автоопределение в eslint-plugin-react использует
    // context.getFilename(), удалённый в ESLint 10
    settings: {react: {version: '18.3'}},
    languageOptions: {globals: globals.browser},
    rules: {
      // Блоки рендерятся на этапе сборки, импорт React в область видимости не нужен
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/function-component-definition': ['error', {namedComponents: 'arrow-function'}],
      'react/jsx-fragments': ['error', 'syntax'],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },

  {
    // Effector — слой данных проекта. Часть правил плагина требует информации о типах,
    // поэтому здесь включён typed linting; область — только исходники под src.
    files: ['src/**/*.{ts,tsx}'],
    extends: [
      effector.flatConfigs.recommended,
      // scope — fork-корректность (обязательно для SSR/SSG), react — биндинги effector-react
      effector.flatConfigs.scope,
      effector.flatConfigs.react,
      effector.flatConfigs.future,
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
