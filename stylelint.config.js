/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  ignoreFiles: ['dist/**', 'node_modules/**', '.agents/**'],
  overrides: [
    {
      // Основная масса стилей живёт в блоках <style> внутри компонентов Astro
      files: ['**/*.astro'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    // Свои классы — BEM в кебаб-кейсе (block__element--modifier). Сюда же попадают
    // классы Gravity UI, которые приходится перебивать в теме: page-constructor
    // использует `pc-block__element`, uikit — `g-root_theme_dark` через подчёркивание.
    'selector-class-pattern': [
      '^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?((--|_)[a-z0-9]+(-[a-z0-9]+)*)*$',
      {resolveNestedSelectors: true},
    ],
    'custom-property-pattern': null,
    // page-constructor и uikit требуют перебивать свои стили
    'declaration-no-important': null,
  },
};
