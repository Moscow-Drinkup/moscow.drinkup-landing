import {BlockType} from '@gravity-ui/page-constructor';
import type {PageContent} from '@gravity-ui/page-constructor';

const TG_TARGET = {target: '_blank', rel: 'noopener'} as const;

// Базовый путь GitHub Pages (репо живёт в подпапке /Moscow-Drinkup-landing/)
const base = import.meta.env.BASE_URL;
const asset = (p: string) => `${base}${p.replace(/^\//, '')}`;

const galleryImages = [
  {src: asset('img/gallery/people-1.jpg'), alt: 'Участники дринкапа в баре'},
  {src: asset('img/gallery/bar-warm-1.jpg'), alt: 'Атмосфера бара на дринкапе'},
  {src: asset('img/gallery/meetup-wide.jpg'), alt: 'Общий план митапа'},
  {src: asset('img/gallery/stage-1.jpg'), alt: 'Выступление спикера'},
  {src: asset('img/gallery/people-2.jpg'), alt: 'Гости дринкапа'},
  {src: asset('img/gallery/bar-crowd.jpg'), alt: 'Зал бара во время дринкапа'},
  {src: asset('img/gallery/bar-amber.jpg'), alt: 'Барная стойка'},
  {src: asset('img/gallery/people-3.jpg'), alt: 'Разговоры за кружкой пива'},
  {src: asset('img/gallery/bar-warm-2.jpg'), alt: 'Вечер в баре'},
  {src: asset('img/gallery/people-4.jpg'), alt: 'Участники общаются'},
  {src: asset('img/gallery/people-5.jpg'), alt: 'Портрет гостя'},
  {src: asset('img/gallery/brand-1.jpg'), alt: 'Брендированный артефакт дринкапа'},
  {src: asset('img/gallery/cyan-1.jpg'), alt: 'Кадр с дринкапа'},
];

export const content: PageContent = {
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
        'Ближайший дринкап — 27 августа, четверг. Участие бесплатное, нужна регистрация: локацию сообщаем только подтверждённым участникам.',
      background: {
        color: '#0b0907',
        image: {src: asset('img/gallery/bar-crowd.jpg'), disableCompress: true},
      },
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
      type: BlockType.TabsBlock,
      title: 'Площадкам и спонсорам',
      description:
        'Мы не продаём билеты и у нас нет бюджетов — поэтому мы в поиске партнёров.',
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
        {
          tabName: 'Спонсорам',
          title: 'Спонсорство дринкапа',
          text: 'Благодаря дружественной атмосфере дринкапов спонсорские активности обеспечивают глубокое касание аудитории и формируют приятные ассоциации с брендами.',
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
          additionalInfo:
            'Кейс «Пивка для рывка»: на дринкапе №4 на средства спонсоров организовали акцию — посетителей на баре ждало welcome-пиво.',
          links: [
            {
              text: 'Стать партнёром — напишите организаторам',
              url: 'https://t.me/SayPoj',
              ...TG_TARGET,
            },
          ],
        },
      ],
    },
    {
      type: BlockType.CardLayoutBlock,
      title: 'Что говорят площадки и партнёры',
      children: [
        {
          type: 'basic-card',
          title: 'Бар Freedom',
          text: '«Ни разу не прогадали! Прикольная тусовка, даже для тех, кто далёк от мира компьютерных технологий. Весёлые ребята под пивко выступали с докладами. Бар остался в хорошем плюсе.»',
        },
        {
          type: 'basic-card',
          title: 'The Backyard Pub',
          text: '«Если вы думаете, что айтишники скучные и душные, вы можете изменить своё мнение здесь. Доклады подавались в наполовину шуточном формате под пиво.»',
        },
        {
          type: 'basic-card',
          title: 'StøyCraft bar',
          text: '«Очень весёлые ребята, интересные спикеры и, конечно же... ПИВОООО! Плюс ко всему и бар не остался в минусе!»',
        },
        {
          type: 'basic-card',
          title: 'Axiom pub',
          text: '«Третьего дня в аксиом пабе на Бауманской в цепкие лапы попало ПИИИИВО! Чудесные докладчицы, чудесные пацаны-девчонки, пиво и приколы. Супер круто, делаем дальше!»',
        },
        {
          type: 'basic-card',
          title: 'Джуниор су-шеф',
          text: '«Лучший IT дринк-ап в Москве, уникальное сообщество и отличная организация. Мы были рады угостить участников мероприятия и планируем делать это регулярно.»',
        },
        {
          type: 'basic-card',
          title: 'DevRel Райффайзенбанка',
          text: '«Коллеги отлично провели промо, поработали с программой и собрали классную тусовку. А мы были рады угостить гостей мероприятия.»',
        },
      ],
    },
    {
      type: BlockType.CardLayoutBlock,
      title: 'Организаторы',
      children: [
        {
          type: 'basic-card',
          title: 'Паша Коршиков',
          text: 'Руководитель команды разработки, эксперт на конференциях, организатор сообществ и мероприятий MoscowJS, TechMeetup и других.',
          links: [{text: '@SayPoj', url: 'https://t.me/SayPoj', ...TG_TARGET}],
        },
        {
          type: 'basic-card',
          title: 'Василий Корянов',
          text: 'Руководитель команды разработки, фронтенд-разработчик, организатор митапов MSK Vue JS, член программного комитета HolyJS, спикер.',
          links: [{text: '@grindpride', url: 'https://t.me/grindpride', ...TG_TARGET}],
        },
        {
          type: 'basic-card',
          title: 'Евгений Кучерявый',
          text: 'CEO Larana.tech, фулстек-разработчик, спикер, автор статей.',
          links: [{text: '@e_kucheriavyi', url: 'https://t.me/e_kucheriavyi', ...TG_TARGET}],
        },
      ],
    },
    {
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
      attribution: true,
    },
  ],
};
