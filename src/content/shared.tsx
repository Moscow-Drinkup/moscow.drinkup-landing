import {BlockType} from '@gravity-ui/page-constructor';

export const TG_TARGET = {target: '_blank', rel: 'noopener'} as const;

// Базовый путь (GitHub Pages: работает и в корне домена, и в подпапке)
const base = import.meta.env.BASE_URL;
export const asset = (p: string) => `${base}${p.replace(/^\//, '')}`;

/* ---------- галерея ---------- */
export const galleryImages = [
  {src: asset('img/gallery/meetup7-1.webp'), alt: 'Дринкап №7: участники в баре'},
  {src: asset('img/gallery/meetup7-2.webp'), alt: 'Дринкап №7: общение за кружкой пива'},
  {src: asset('img/gallery/meetup8-1.webp'), alt: 'Дринкап №8: гости мероприятия'},
  {src: asset('img/gallery/meetup10-1.webp'), alt: 'Дринкап №10: зал бара'},
  {src: asset('img/gallery/meetup7-3.webp'), alt: 'Дринкап №7: разговоры'},
  {src: asset('img/gallery/meetup8-2.webp'), alt: 'Дринкап №8: участники общаются'},
  {src: asset('img/gallery/meetup10-2.webp'), alt: 'Дринкап №10: гости слушают доклад'},
  {src: asset('img/gallery/meetup7-4.webp'), alt: 'Дринкап №7: атмосфера вечера'},
  {src: asset('img/gallery/meetup8-3.webp'), alt: 'Дринкап №8: выступление спикера'},
  {src: asset('img/gallery/meetup10-3.webp'), alt: 'Дринкап №10: фото на память'},
];

/* ---------- отзывы: площадки ---------- */
export const venueQuotes = [
  {
    type: 'review',
    text: '«Ни разу не прогадали! Прикольная тусовка, даже для тех, кто далёк от мира компьютерных технологий. Весёлые ребята под пивко выступали с докладами. Бар остался в хорошем плюсе.»',
    logo: asset('img/logos/freedom.png'),
    image: asset('img/gallery/meetup7-1.webp'),
    author: {firstName: 'Евгений', description: 'бар Freedom на Флаконе', url: 'https://freedombar.ru/'},
    theme: 'dark',
  },
  {
    type: 'review',
    text: '«Если вы думаете, что айтишники скучные и душные, вы можете изменить своё мнение здесь. Доклады подавались в наполовину шуточном формате под пиво.»',
    logo: asset('img/logos/backyard.png'),
    image: asset('img/gallery/meetup7-2.webp'),
    author: {firstName: 'The Backyard Pub', description: 'Китай-город', url: 'https://vk.com/backyardpub'},
    theme: 'dark',
  },
  {
    type: 'review',
    text: '«Очень весёлые ребята, интересные спикеры и, конечно же... ПИВОООО! Плюс ко всему и бар не остался в минусе!»',
    logo: asset('img/logos/stoycraft.png'),
    image: asset('img/gallery/meetup8-1.webp'),
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
    image: asset('img/gallery/meetup10-1.webp'),
    author: {firstName: 'Axiom pub', description: 'Бауманская', url: 'https://axiom-pub.eatout.ru/'},
    theme: 'dark',
  },
];

/* ---------- отзывы: партнёры ---------- */
export const partnerQuotes = [
  {
    type: 'review',
    text: '«Лучший IT дринк-ап в Москве, уникальное сообщество и отличная организация. Мы были рады угостить участников мероприятия и планируем делать это регулярно.»',
    logo: asset('img/logos/junior.png'),
    image: asset('img/gallery/meetup8-2.webp'),
    author: {firstName: 'Паша', description: 'Джуниор су-шеф'},
    theme: 'dark',
  },
  {
    type: 'review',
    text: '«Коллеги отлично провели промо, поработали с программой и собрали классную тусовку. А мы были рады угостить гостей мероприятия.»',
    logo: asset('img/logos/raiffeisen.png'),
    image: asset('img/gallery/meetup10-2.webp'),
    author: {firstName: 'Аня', description: 'DevRel Райффайзенбанк', url: 'https://www.raiffeisen.ru/'},
    theme: 'dark',
  },
  {
    type: 'review',
    text: '«Конечно, изначально мы отнеслись с подозрением и настороженностью к IT-мероприятию, которое состоялось в баре. Но, как показала практика, это была отличная возможность для экспертов в IT собраться вместе, обменяться опытом и обсудить актуальные тенденции в сфере технологий. И мы были рады поддержать сообщество и стать партнёрами мероприятия. Бар стал отличным местом для такого рода встречи и, конечно, разнообразное меню напитков сделали встречу ещё более приятной. DrinkUp прошёл насыщенно: интересные доклады, живые обсуждения и возможность задать вопросы спикерам. Это отличный способ объединить профессионалов и создать платформу для обмена идеями в непринуждённой обстановке.»',
    logo: asset('img/logos/2gis.png'),
    image: asset('img/gallery/meetup8-3.webp'),
    author: {firstName: '2ГИС', description: 'партнёр мероприятия', url: 'https://2gis.ru'},
    theme: 'dark',
  },
];

/* ---------- отзывы: участники ---------- */
export const participantQuotes = [
  {
    type: 'review',
    text: '«Такие камерные небольшие мероприятия, как DrinkUp, только на первый взгляд кажутся совершенно несопоставимыми с большими конференциями. В действительности же сплочённость комьюнити, неформальная обстановка и близость по духу (и по целям мероприятия) даёт фору любому большому официальному брату.»',
    image: asset('img/gallery/meetup10-3.webp'),
    author: {firstName: 'Максим', description: 'участник'},
    theme: 'dark',
  },
  {
    type: 'review',
    text: '«Необычный и интересный формат мероприятия, конечно. Харизматичные спикеры с нестандартными докладами и главный лозунг мероприятия ПИИИИВО — что может быть лучше? Всё понравилось, с удовольствием посещу ещё раз и даже пойду в спикеры!»',
    image: asset('img/gallery/meetup7-4.webp'),
    author: {firstName: 'Илья', description: 'участник'},
    theme: 'dark',
  },
];

/* ---------- команда ---------- */
export const teamMembers = [
  {
    name: 'Паша Коршиков',
    role: 'Руководитель команды разработки, эксперт на конференциях, организатор сообществ и мероприятий MoscowJS, TechMeetup и других.',
    tg: '@SayPoj',
    photo: asset('img/team/pasha.webp'),
  },
  {
    name: 'Василий Корянов',
    role: 'Руководитель команды разработки, фронтенд-разработчик, организатор митапов MSK Vue JS, член программного комитета HolyJS, спикер.',
    tg: '@grindpride',
    photo: asset('img/team/vasily.webp'),
  },
  {
    name: 'Евгений Кучерявый',
    role: 'CEO Larana.tech, фулстек-разработчик, спикер, автор статей.',
    tg: '@e_kucheriavyi',
    photo: asset('img/team/evgeny.webp'),
  },
];

/* ---------- футер ---------- */
export const footerBlock = {
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
          // Ведёт на сообщество в Networkly (список всех мероприятий), а не на конкретный митап
          {text: 'Регистрация на дринкап', url: 'https://networkly.app/community/moscow_drinkup', ...TG_TARGET},
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
