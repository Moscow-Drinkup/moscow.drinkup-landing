import {BlockType, SubBlockType} from '@gravity-ui/page-constructor';
import type {PageContent} from '@gravity-ui/page-constructor';
import {NextEventInline} from './components/NextEventInline';
import {events} from './generated-events';

const TG_TARGET = {target: '_blank', rel: 'noopener'} as const;

// Базовый путь (GitHub Pages: работает и в корне домена, и в подпапке)
const base = import.meta.env.BASE_URL;
const asset = (p: string) => `${base}${p.replace(/^\//, '')}`;

/* ---------- галерея ---------- */
const galleryImages = [
  {src: asset('img/gallery/meetup7-1.jpg'), alt: 'Дринкап №7: участники в баре'},
  {src: asset('img/gallery/meetup7-2.jpg'), alt: 'Дринкап №7: общение за кружкой пива'},
  {src: asset('img/gallery/meetup8-1.jpg'), alt: 'Дринкап №8: гости мероприятия'},
  {src: asset('img/gallery/meetup10-1.jpg'), alt: 'Дринкап №10: зал бара'},
  {src: asset('img/gallery/meetup7-3.jpg'), alt: 'Дринкап №7: разговоры'},
  {src: asset('img/gallery/meetup8-2.jpg'), alt: 'Дринкап №8: участники общаются'},
  {src: asset('img/gallery/meetup10-2.jpg'), alt: 'Дринкап №10: гости слушают доклад'},
  {src: asset('img/gallery/meetup7-4.jpg'), alt: 'Дринкап №7: атмосфера вечера'},
  {src: asset('img/gallery/meetup8-3.jpg'), alt: 'Дринкап №8: выступление спикера'},
  {src: asset('img/gallery/meetup10-3.jpg'), alt: 'Дринкап №10: фото на память'},
];

/* ---------- отзывы: площадки ---------- */
const venueQuotes = [
  {
    type: SubBlockType.Quote,
    text: '«Ни разу не прогадали! Прикольная тусовка, даже для тех, кто далёк от мира компьютерных технологий. Весёлые ребята под пивко выступали с докладами. Бар остался в хорошем плюсе.»',
    logo: asset('img/logos/freedom.png'),
    image: asset('img/gallery/meetup7-1.jpg'),
    author: {firstName: 'Евгений', description: 'бар Freedom на флаконе'},
    theme: 'dark',
  },
  {
    type: SubBlockType.Quote,
    text: '«Если вы думаете, что айтишники скучные и душные, вы можете изменить своё мнение здесь. Доклады подавались в наполовину шуточном формате под пиво.»',
    logo: asset('img/logos/backyard.png'),
    image: asset('img/gallery/meetup7-2.jpg'),
    author: {firstName: 'The Backyard Pub', description: 'Китай-город'},
    theme: 'dark',
  },
  {
    type: SubBlockType.Quote,
    text: '«Очень весёлые ребята, интересные спикеры и, конечно же... ПИВОООО! Плюс ко всему и бар не остался в минусе!»',
    logo: asset('img/logos/stoycraft.png'),
    image: asset('img/gallery/meetup8-1.jpg'),
    author: {firstName: 'Камиль', description: 'StøyCraft bar, Валовой'},
    theme: 'dark',
  },
  {
    type: SubBlockType.Quote,
    text: '«Третьего дня в аксиом пабе на Бауманской в цепкие лапы попало ПИИИИВО! Чудесные докладчицы, чудесные пацаны-девчонки, пиво и приколы. Супер круто, делаем дальше!»',
    logo: asset('img/logos/axiom.png'),
    image: asset('img/gallery/meetup10-1.jpg'),
    author: {firstName: 'Axiom pub', description: 'Бауманская'},
    theme: 'dark',
  },
];

/* ---------- отзывы: партнёры ---------- */
const partnerQuotes = [
  {
    type: SubBlockType.Quote,
    text: '«Лучший IT дринк-ап в Москве, уникальное сообщество и отличная организация. Мы были рады угостить участников мероприятия и планируем делать это регулярно.»',
    logo: asset('img/logos/junior.png'),
    image: asset('img/gallery/meetup8-2.jpg'),
    author: {firstName: 'Паша', description: 'Джуниор су-шеф'},
    theme: 'dark',
  },
  {
    type: SubBlockType.Quote,
    text: '«Коллеги отлично провели промо, поработали с программой и собрали классную тусовку. А мы были рады угостить гостей мероприятия.»',
    logo: asset('img/logos/raiffeisen.png'),
    image: asset('img/gallery/meetup10-2.jpg'),
    author: {firstName: 'Аня', description: 'DevRel Райффайзенбанк'},
    theme: 'dark',
  },
];

/* ---------- команда ---------- */
const teamMembers = [
  {
    name: 'Паша Коршиков',
    role: 'Руководитель команды разработки, эксперт на конференциях, организатор сообществ и мероприятий MoscowJS, TechMeetup и других.',
    tg: '@SayPoj',
    photo: asset('img/team/pasha.png'),
  },
  {
    name: 'Василий Корянов',
    role: 'Руководитель команды разработки, фронтенд-разработчик, организатор митапов MSK Vue JS, член программного комитета HolyJS, спикер.',
    tg: '@grindpride',
    photo: asset('img/team/vasily.png'),
  },
  {
    name: 'Евгений Кучерявый',
    role: 'CEO Larana.tech, фулстек-разработчик, спикер, автор статей.',
    tg: '@e_kucheriavyi',
    photo: asset('img/team/evgeny.png'),
  },
];

/* ---------- футер ---------- */
const footerBlock = {
  type: BlockType.FooterBlock,
  navigation: {
    logo: {
      image: {src: asset('img/logo.png'), disableCompress: true},
      alt: 'Moscow DrinkUp',
      placement: 'top',
    },
    columns: [
      {
        title: 'Сообщество',
        links: [
          {text: 'Канал @moscow_drinkup', url: 'https://t.me/moscow_drinkup', ...TG_TARGET},
          {text: 'Чат @drinkup_moscow', url: 'https://t.me/drinkup_moscow', ...TG_TARGET},
        ],
      },
      {
        title: 'Участие',
        links: [
          {text: 'Регистрация на дринкап', url: 'https://networkly.app/event/6699', ...TG_TARGET},
          {text: 'Поддержать на Boosty', url: 'https://boosty.to/beerjs_moscow_drinkup', ...TG_TARGET},
        ],
      },
      {
        title: 'Организаторы',
        links: [
          {text: '@SayPoj', url: 'https://t.me/SayPoj', ...TG_TARGET},
          {text: '@grindpride', url: 'https://t.me/grindpride', ...TG_TARGET},
          {text: '@e_kucheriavyi', url: 'https://t.me/e_kucheriavyi', ...TG_TARGET},
        ],
      },
    ],
  },
  disclaimer: {
    text: 'Начинали как часть международного объединения beerjs.global — продолжаем как Moscow DrinkUp. Вход бесплатный, доклады экспертные, пиво своё.',
    align: 'left',
  },
  copyright: {
    copyrightText: '© 2026 Moscow DrinkUp',
  },
} as const;

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
        <NextEventInline key="next" />,
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
      type: 'team',
      title: 'Организаторы',
      members: teamMembers,
    },
    footerBlock,
  ],
};

/* ================= МЕРОПРИЯТИЯ ================= */
export const contentEvents: PageContent = {
  background: {color: '#0b0907'},
  blocks: [
    {
      type: BlockType.HeaderBlock,
      overtitle: 'Для участников',
      title: 'Мероприятия',
      description:
        'Барные айти-митапы Moscow DrinkUp: нумерованные дринкапы по четвергам. Дата следующего дринкапа появляется здесь, как только её объявляют в сообществе на Networkly.',
      background: {color: '#0b0907'},
      theme: 'dark',
      verticalOffset: 'l',
    },
    {
      type: 'events',
      title: 'Все дринкапы',
      items: events,
    },
    footerBlock,
  ],
};

/* ================= ПЛОЩАДКАМ ================= */
export const contentVenues: PageContent = {
  background: {color: '#0b0907'},
  blocks: [
    {
      type: BlockType.HeaderBlock,
      overtitle: 'Для баров и площадок',
      title: 'Площадкам',
      description:
        'Мы не продаём билеты и у нас нет бюджетов — поэтому мы в поиске партнёров. Если ваш бар подходит — напишите нам.',
      background: {color: '#0b0907'},
      theme: 'dark',
      verticalOffset: 'l',
    },
    {
      type: BlockType.TabsBlock,
      title: 'Формат сотрудничества',
      description: 'Полный зал в четверг — это про нас. Что мы приносим и что нам нужно.',
      items: [
        {
          tabName: 'Что мы приносим',
          title: 'Полный зал в четверг',
          text: 'Собственная аудитория и известность в IT-сообществах обеспечивают полную заполненность бара в день мероприятия.',
          list: [
            {
              title: 'Новая аудитория',
              text: 'Знакомим участников сообщества с вашим баром — они будут возвращаться даже без наших мероприятий.',
            },
            {
              title: 'Гости тратят деньги',
              text: 'Формат не ограничивает участников во время докладов: очередь к бару стоит даже во время выступлений. Средний чек — ~2500 ₽ на человека.',
            },
          ],
          additionalInfo:
            '50–90 человек в среднем · ~150 регистраций на дринкап · 50–80 подтверждаем по вместимости площадки',
        },
        {
          tabName: 'Что нам нужно',
          title: 'Требования к площадке',
          text: 'Считаете, что ваш бар подходит? Напишите Паше: @SayPoj.',
          list: [
            {
              title: 'Тип заведения — бар',
              text: 'Участники хотят насладиться отличными напитками и едой. Кальянные, увы, не подходят.',
            },
            {
              title: 'Пространство для выступлений',
              text: 'Нужен экран или проектор — спикера и экраны должно быть видно из всего зала.',
            },
            {
              title: 'Транспортная доступность',
              text: 'Внутри Третьего транспортного кольца, желательно ближе к центру.',
            },
            {
              title: 'Вместимость от 50 человек',
              text: 'Единое пространство — рестораны с отдельными зонами и несвободными посадками не рассматриваем.',
            },
            {
              title: 'Оборудование',
              text: 'Рады экрану, микрофонам, колонкам и микшеру. Но это необязательно — если площадка крутая, организуем сами.',
            },
          ],
          links: [{text: 'Предложить площадку — @SayPoj', url: 'https://t.me/SayPoj', ...TG_TARGET}],
        },
      ],
    },
    {
      type: BlockType.CardLayoutBlock,
      title: 'Отзывы площадок',
      children: venueQuotes,
    },
    footerBlock,
  ],
};

/* ================= ПАРТНЁРАМ ================= */
export const contentPartners: PageContent = {
  background: {color: '#0b0907'},
  blocks: [
    {
      type: BlockType.HeaderBlock,
      overtitle: 'Для партнёров',
      title: 'Партнёрам',
      description:
        'Спонсорские активности на дринкапах обеспечивают глубокое касание аудитории и формируют приятные ассоциации с брендами.',
      background: {color: '#0b0907'},
      theme: 'dark',
      verticalOffset: 'l',
    },
    {
      type: BlockType.InfoBlock,
      theme: 'dark',
      backgroundColor: '#1a1206',
      leftContent: {
        title: 'Спонсорство дринкапа',
        text: 'Благодаря дружественной атмосфере дринкапов спонсорские активности обеспечивают глубокое касание аудитории и формируют приятные ассоциации с брендами. Мы готовы к сотрудничеству в удобном для вас формате — финансовом (закрытие чека мероприятия) или нефинансовом (площадка, оборудование и т.д.).',
        list: [
          {
            title: 'Активности с брендом',
            text: 'Проведём совместные активности с упоминанием вашего бренда.',
          },
          {
            title: 'Спикеры',
            text: 'Пригласим интересных спикеров из Москвы и других городов.',
          },
          {
            title: 'Места для сотрудников',
            text: 'Зарезервируем места для ваших сотрудников.',
          },
        ],
        links: [{text: 'Стать партнёром — @SayPoj', url: 'https://t.me/SayPoj', ...TG_TARGET}],
      },
      rightContent: {
        title: 'Кейс «Пивка для рывка»',
        text: 'На дринкапе №4 мы опробовали спонсорский пакет поддержки мероприятия: на средства спонсоров организовали акцию — посетителей на баре ждало welcome-пиво.',
      },
    },
    {
      type: BlockType.CardLayoutBlock,
      title: 'Отзывы партнёров',
      children: partnerQuotes,
    },
    footerBlock,
  ],
};
