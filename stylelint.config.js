/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  ignoreFiles: ['dist/**', 'node_modules/**', '.agents/**'],
  rules: {
    // Свои классы в кебаб-кейсе с префиксом drinkup-, токены дизайн-системы — с --g-
    'selector-class-pattern': '^[a-z][a-z0-9]*(-[a-z0-9]+)*(--?[a-z0-9]+(-[a-z0-9]+)*)*$',
    'custom-property-pattern': null,
    // page-constructor и uikit требуют перебивать свои стили
    'declaration-no-important': null,
  },
};
