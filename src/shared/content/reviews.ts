import {withBase} from '@/shared/lib';

export interface Review {
  text: string;
  photo: string;
  logo?: string;
  author: string;
  authorDescription: string;
  authorUrl?: string;
}

/** Отзывы площадок, которые принимали дринкапы. */
export const venueReviews: Review[] = [
  {
    text: 'Ни разу не прогадали! Прикольная тусовка, даже для тех, кто далёк от мира компьютерных технологий. Весёлые ребята под пивко выступали с докладами. Бар остался в хорошем плюсе.',
    logo: withBase('/img/logos/freedom.png'),
    photo: withBase('/img/gallery/meetup7-1.webp'),
    author: 'Евгений',
    authorDescription: 'бар Freedom на Флаконе',
    authorUrl: 'https://freedombar.ru/',
  },
  {
    text: 'Если вы думаете, что айтишники скучные и душные, вы можете изменить своё мнение здесь. Доклады подавались в наполовину шуточном формате под пиво.',
    logo: withBase('/img/logos/backyard.png'),
    photo: withBase('/img/gallery/meetup7-2.webp'),
    author: 'The Backyard Pub',
    authorDescription: 'Китай-город',
    authorUrl: 'https://vk.com/backyardpub',
  },
  {
    text: 'Очень весёлые ребята, интересные спикеры и, конечно же... ПИВОООО! Плюс ко всему и бар не остался в минусе!',
    logo: withBase('/img/logos/stoycraft.png'),
    photo: withBase('/img/gallery/meetup8-1.webp'),
    author: 'Камиль',
    authorDescription: 'StøyCraft bar, Валовой',
    authorUrl: 'https://yandex.ru/maps/org/stoy/156335782561/',
  },
  {
    text: 'Третьего дня в аксиом пабе на Бауманской в цепкие лапы попало ПИИИИВО! Чудесные докладчицы, чудесные пацаны-девчонки, пиво и приколы. Супер круто, делаем дальше!',
    logo: withBase('/img/logos/axiom.png'),
    photo: withBase('/img/gallery/meetup10-1.webp'),
    author: 'Axiom pub',
    authorDescription: 'Бауманская',
    authorUrl: 'https://axiom-pub.eatout.ru/',
  },
];

/** Отзывы партнёров, поддержавших мероприятия. */
export const partnerReviews: Review[] = [
  {
    text: 'Лучший IT дринк-ап в Москве, уникальное сообщество и отличная организация. Мы были рады угостить участников мероприятия и планируем делать это регулярно.',
    logo: withBase('/img/logos/junior.png'),
    photo: withBase('/img/gallery/meetup8-2.webp'),
    author: 'Паша',
    authorDescription: 'Джуниор су-шеф',
  },
  {
    text: 'Коллеги отлично провели промо, поработали с программой и собрали классную тусовку. А мы были рады угостить гостей мероприятия.',
    logo: withBase('/img/logos/raiffeisen.png'),
    photo: withBase('/img/gallery/meetup10-2.webp'),
    author: 'Аня',
    authorDescription: 'DevRel Райффайзенбанк',
    authorUrl: 'https://www.raiffeisen.ru/',
  },
  {
    text: 'Изначально мы отнеслись с подозрением к IT-мероприятию в баре. Но это была отличная возможность для экспертов собраться вместе, обменяться опытом и обсудить актуальные тенденции. DrinkUp прошёл насыщенно: интересные доклады, живые обсуждения и возможность задать вопросы спикерам.',
    logo: withBase('/img/logos/2gis.png'),
    photo: withBase('/img/gallery/meetup8-3.webp'),
    author: '2ГИС',
    authorDescription: 'партнёр мероприятия',
    authorUrl: 'https://2gis.ru',
  },
];

/** Отзывы участников дринкапов. */
export const participantReviews: Review[] = [
  {
    text: 'Такие камерные небольшие мероприятия, как DrinkUp, только на первый взгляд кажутся несопоставимыми с большими конференциями. В действительности сплочённость комьюнити, неформальная обстановка и близость по духу даёт фору любому большому официальному брату.',
    photo: withBase('/img/gallery/meetup10-3.webp'),
    author: 'Максим',
    authorDescription: 'участник',
  },
  {
    text: 'Необычный и интересный формат мероприятия. Харизматичные спикеры с нестандартными докладами и главный лозунг мероприятия ПИИИИВО — что может быть лучше? Всё понравилось, с удовольствием посещу ещё раз и даже пойду в спикеры!',
    photo: withBase('/img/gallery/meetup7-4.webp'),
    author: 'Илья',
    authorDescription: 'участник',
  },
];
