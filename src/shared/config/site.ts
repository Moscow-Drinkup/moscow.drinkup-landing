/** Константы сайта: адреса, тексты по умолчанию и внешние ссылки сообщества. */

export const SITE = {
  name: 'Moscow DrinkUp',
  url: 'https://drinkup.moscow',
  locale: 'ru_RU',
  lang: 'ru',
  themeColor: '#0b0907',
  title: 'Moscow DrinkUp — барные айти-митапы в Москве',
  description:
    'Moscow DrinkUp — неформальные барные айти-митапы в Москве: экспертные доклады за кружкой пива, по четвергам. Участие бесплатное — регистрируйтесь на ближайший дринкап.',
  ogImage: '/img/og-banner.png',
  logo: '/img/logo.png',
} as const;

/** Внешние площадки сообщества. */
export const LINKS = {
  telegramChannel: 'https://t.me/moscow_drinkup',
  telegramChat: 'https://t.me/drinkup_moscow',
  boosty: 'https://boosty.to/beerjs_moscow_drinkup',
  networkly: 'https://networkly.app/community/moscow_drinkup',
} as const;

/** Атрибуты для внешних ссылок, открываемых в новой вкладке. */
export const EXTERNAL_LINK_ATTRS = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;
