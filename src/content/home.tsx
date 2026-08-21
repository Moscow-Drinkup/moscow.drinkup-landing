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
      type: BlockType.FoldableListBlock,
      title: 'Частые вопросы',
      items: [
        {
          title: 'Что такое Moscow DrinkUp?',
          text: 'Moscow DrinkUp — это неформальные барные айти-митапы в Москве, объединяющие форматы афтепати и митапа: экспертные доклады и живое общение за кружкой пива в одном пространстве, без разделения на «сцену» и «после». Встречи проходят по четвергам в барах Москвы несколько раз в год. Раньше сообщество входило в международное объединение beerjs.global.',
        },
        {
          title: 'Где проходят дринкапы?',
          text: 'В барах Москвы: Freedom на Флаконе, The Backyard Pub на Китай-городе, StøyCraft bar на Валовой, Axiom pub на Бауманской и других площадках. Точный адрес ближайшего дринкапа приходит зарегистрированным участникам в Networkly.',
        },
        {
          title: 'Сколько стоит участие?',
          text: 'Участие бесплатное — билеты мы не продаём. Дринкапы работают по модели: пиво и закуски с вас, доклады — с нас.',
        },
        {
          title: 'Как зарегистрироваться?',
          text: 'Регистрация — в сообществе Moscow DrinkUp на Networkly: открываете страницу ближайшего события и оставляете заявку. После подтверждения придёт приглашение с адресом и QR-кодом для входа.',
        },
        {
          title: 'Кто может прийти?',
          text: 'Любой, кому близка IT-тематика: разработчики, деврелы, аналитики, тестировщики — и все, кто хочет обсудить айтишные боли за пивом. Доклады экспертные, формат неформальный.',
        },
        {
          title: 'Как стать спикером?',
          text: 'Заполните форму CFP в сообществе на Networkly — программу ближайшего дринкапа собирают организаторы. Приветствуются доклады в наполовину шуточном формате, но по делу.',
        },
      ],
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
