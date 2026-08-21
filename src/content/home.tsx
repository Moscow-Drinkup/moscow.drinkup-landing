import {BlockType} from '@gravity-ui/page-constructor';
import type {PageContent} from '@gravity-ui/page-constructor';
import {
  footerBlock,
  galleryImages,
  partnerQuotes,
  participantQuotes,
  teamMembers,
  venueQuotes,
  TG_TARGET,
} from './shared';

/* ================= ГЛАВНАЯ ================= */
export const contentHome: PageContent = {
  background: {color: '#0b0907'},
  blocks: [
    {
      type: BlockType.HeroBlock,
      overtitle: 'Барные митапы для IT-сообщества · Москва · по четвергам',
      title: {
        text: 'Moscow',
        custom: <span>DrinkUp</span>,
      },
      text: 'Собираемся выпить пиво, поделиться болячками, поныть — и послушать экспертные доклады за кружкой пива. Афтепати и митап в одном формате, без разделения на официальное и неформальное.',
      buttons: [
        {
          text: 'Зарегистрироваться',
          url: 'https://networkly.app/event/6699',
          primary: true,
          extraProps: TG_TARGET,
        },
        {
          text: 'Поддержать',
          url: 'https://boosty.to/beerjs_moscow_drinkup',
          primary: false,
          extraProps: TG_TARGET,
        },
      ],
      additionalInfo:
        'Участие бесплатное. Регистрация и анонсы — в сообществе на Networkly.',
      links: [
        {text: 'Сообщество на Networkly', url: 'https://networkly.app/community/moscow_drinkup', ...TG_TARGET},
      ],
      background: {color: '#0b0907'},
      theme: 'dark',
      verticalOffset: 'l',
    },
    {
      type: 'nextEventCard',
    },
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
          {text: 'Все мероприятия', url: '#/events'},
          {text: 'Как стать партнёром', url: '#/partners'},
        ],
      },
    },
    {
      type: 'gallery',
      images: galleryImages,
    },
    {
      type: BlockType.CardLayoutBlock,
      title: 'Отзывы площадок',
      children: venueQuotes,
    },
    {
      type: BlockType.CardLayoutBlock,
      title: 'Отзывы партнёров',
      children: partnerQuotes,
    },
    {
      type: BlockType.CardLayoutBlock,
      title: 'Отзывы участников',
      children: participantQuotes,
    },
    {
      type: 'team',
      title: 'Организаторы',
      members: teamMembers,
    },
    footerBlock,
  ],
};
