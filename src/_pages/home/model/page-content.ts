import {BlockType} from '@gravity-ui/page-constructor';
import type {PageContent} from '@gravity-ui/page-constructor';
import {EXTERNAL_LINK_ATTRS, LINKS, SITE} from '@/shared/config';
import {withBase} from '@/shared/lib';

/**
 * Блоки главной, которые рисует PageConstructor. Он рендерится статически,
 * поэтому здесь только неинтерактивные блоки: остальные секции страницы —
 * собственные компоненты Astro.
 */

/** Первый экран. Кнопка регистрации ведёт на ближайшее событие. */
export const heroContent = (registrationUrl: string): PageContent => ({
  background: {color: SITE.themeColor},
  blocks: [
    {
      type: BlockType.HeroBlock,
      overtitle: 'Барные митапы для IT-сообщества · Москва · по четвергам',
      title: 'Moscow DrinkUp',
      text: 'Собираемся выпить пиво, поделиться болячками, поныть — и послушать экспертные доклады за кружкой пива. Афтепати и митап в одном формате, без разделения на официальное и неформальное.',
      buttons: [
        {
          text: 'Зарегистрироваться',
          url: registrationUrl,
          primary: true,
          extraProps: EXTERNAL_LINK_ATTRS,
        },
        {
          text: 'Поддержать',
          url: LINKS.boosty,
          primary: false,
          extraProps: EXTERNAL_LINK_ATTRS,
        },
      ],
      additionalInfo: 'Участие бесплатное. Регистрация и анонсы — в сообществе на Networkly.',
      background: {color: SITE.themeColor},
      theme: 'dark',
      verticalOffset: 'l',
    },
  ],
});

/** Рассказ о формате. */
export const aboutContent: PageContent = {
  background: {color: SITE.themeColor},
  blocks: [
    {
      type: BlockType.InfoBlock,
      theme: 'dark',
      backgroundColor: '#1a1206',
      leftContent: {
        title: 'Дринкап как концепция',
        text: 'Дринкап — это объединение форматов афтепати и митапа. Основное различие в том, что нет разделения между формальной и неформальной частью: зрители совмещают приятное с полезным — слушают технические (и не только) доклады за кружкой пива.',
        additionalInfo:
          'В прошлом мы — часть международного объединения beerjs.global. Продолжаем как Moscow DrinkUp.',
      },
      rightContent: {
        text: 'Это сообщество для тех, чьи айтишные проблемы в полной мере не понимают даже коллеги. Мы собираемся по четвергам выпить пиво, поделиться болячками, поныть и просто пообщаться.',
        list: [
          {
            title: 'Формат',
            text: 'Афтепати × митап: доклады и общение без разделения на «сцену» и «после».',
          },
          {
            title: 'Периодичность',
            text: 'Встречаемся по четвергам, несколько раз в год.',
          },
          {
            title: 'Билеты',
            text: 'Мероприятия бесплатные — билеты не продаём, поэтому в поиске партнёров.',
          },
        ],
        links: [
          {text: 'Все мероприятия', url: withBase('/events')},
          {text: 'Как стать партнёром', url: withBase('/partners')},
        ],
      },
    },
  ],
};
