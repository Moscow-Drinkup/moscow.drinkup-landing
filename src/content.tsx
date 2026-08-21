import {BlockType} from '@gravity-ui/page-constructor';
import type {PageContent} from '@gravity-ui/page-constructor';
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
    type: 'review',
    text: '«Ни разу не прогадали! Прикольная тусовка, даже для тех, кто далёк от мира компьютерных технологий. Весёлые ребята под пивко выступали с докладами. Бар остался в хорошем плюсе.»',
    logo: asset('img/logos/freedom.png'),
    image: asset('img/gallery/meetup7-1.jpg'),
    author: {firstName: 'Евгений', description: 'бар Freedom на Флаконе', url: 'https://freedombar.ru/'},
    theme: 'dark',
  },
  {
    type: 'review',
    text: '«Если вы думаете, что айтишники скучные и душные, вы можете изменить своё мнение здесь. Доклады подавались в наполовину шуточном формате под пиво.»',
    logo: asset('img/logos/backyard.png'),
    image: asset('img/gallery/meetup7-2.jpg'),
    author: {firstName: 'The Backyard Pub', description: 'Китай-город', url: 'https://vk.com/backyardpub'},
    theme: 'dark',
  },
  {
    type: 'review',
    text: '«Очень весёлые ребята, интересные спикеры и, конечно же... ПИВОООО! Плюс ко всему и бар не остался в минусе!»',
    logo: asset('img/logos/stoycraft.png'),
    image: asset('img/gallery/meetup8-1.jpg'),
    author: {
      firstName: 'Камиль',
      description: 'StøyCraft bar, Валовой',
      url: 'https://yandex.ru/maps/org/stoy/156335782561/',
    },
    theme: 'dark',
  },
  {
    type: 'review',
    text: '«Третьего дня в аксиом пабе на Бауманской в цепкие лапы попало ПИИИИВО! Чудесные докладчицы, чудесные пацаны-девчонки, пиво и приколы. Супер круто, делаем дальше!»',
    logo: asset('img/logos/axiom.png'),
    image: asset('img/gallery/meetup10-1.jpg'),
    author: {firstName: 'Axiom pub', description: 'Бауманская', url: 'https://axiom-pub.eatout.ru/'},
    theme: 'dark',
  },
];

/* ---------- отзывы: партнёры ---------- */
const partnerQuotes = [
  {
    type: 'review',
    text: '«Лучший IT дринк-ап в Москве, уникальное сообщество и отличная организация. Мы были рады угостить участников мероприятия и планируем делать это регулярно.»',
    logo: asset('img/logos/junior.png'),
    image: asset('img/gallery/meetup8-2.jpg'),
    author: {firstName: 'Паша', description: 'Джуниор су-шеф'},
    theme: 'dark',
  },
  {
    type: 'review',
    text: '«Коллеги отлично провели промо, поработали с программой и собрали классную тусовку. А мы были рады угостить гостей мероприятия.»',
    logo: asset('img/logos/raiffeisen.png'),
    image: asset('img/gallery/meetup10-2.jpg'),
    author: {firstName: 'Аня', description: 'DevRel Райффайзенбанк', url: 'https://www.raiffeisen.ru/'},
    theme: 'dark',
  },
  {
    type: 'review',
    text: '«Конечно, изначально мы отнеслись с подозрением и настороженностью к IT-мероприятию, которое состоялось в баре. Но, как показала практика, это была отличная возможность для экспертов в IT собраться вместе, обменяться опытом и обсудить актуальные тенденции в сфере технологий. И мы были рады поддержать сообщество и стать партнёрами мероприятия. Бар стал отличным местом для такого рода встречи и, конечно, разнообразное меню напитков сделали встречу ещё более приятной. DrinkUp прошёл насыщенно: интересные доклады, живые обсуждения и возможность задать вопросы спикерам. Это отличный способ объединить профессионалов и создать платформу для обмена идеями в непринуждённой обстановке.»',
    logo: asset('img/logos/2gis.png'),
    image: asset('img/gallery/meetup8-3.jpg'),
    author: {firstName: '2ГИС', description: 'партнёр мероприятия', url: 'https://2gis.ru'},
    theme: 'dark',
  },
];

/* ---------- отзывы: участники ---------- */
const participantQuotes = [
  {
    type: 'review',
    text: '«Такие камерные небольшие мероприятия, как DrinkUp, только на первый взгляд кажутся совершенно несопоставимыми с большими конференциями. В действительности же сплочённость комьюнити, неформальная обстановка и близость по духу (и по целям мероприятия) даёт фору любому большому официальному брату.»',
    image: asset('img/gallery/meetup10-3.jpg'),
    author: {firstName: 'Максим', description: 'участник'},
    theme: 'dark',
  },
  {
    type: 'review',
    text: '«Необычный и интересный формат мероприятия, конечно. Харизматичные спикеры с нестандартными докладами и главный лозунг мероприятия ПИИИИВО — что может быть лучше? Всё понравилось, с удовольствием посещу ещё раз и даже пойду в спикеры!»',
    image: asset('img/gallery/meetup7-4.jpg'),
    author: {firstName: 'Илья', description: 'участник'},
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
          links: [{text: 'Наши мероприятия', url: '#/events'}],
        },
        {
          tabName: 'Что нам нужно',
          title: 'Требования к площадке',
          text: 'Считаете, что ваш бар подходит? Напишите организаторам.',
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
          links: [{text: 'Напишите организаторам', url: '#/?orgs'}],
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
        links: [
          {text: 'Посмотреть мероприятия', url: '#/events'},
          {text: 'Напишите организаторам', url: '#/?orgs'},
        ],
      },
      rightContent: {
        title: 'Кейс «Пивка для рывка»',
        text: 'На дринкапе №4 мы опробовали спонсорский пакет поддержки мероприятия: на средства спонсоров организовали акцию — посетителей на баре ждало welcome-пиво.',
        links: [{text: 'Страница дринкапа №4', url: '#/events/4453'}],
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
