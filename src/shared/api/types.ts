/** Мероприятие сообщества в том виде, в каком его показывает сайт. */
export interface DrinkupEvent {
  /** Идентификатор события в Networkly. */
  id: number;
  name: string;
  /** Номер дринкапа в формате «#11», если его удалось выделить из названия. */
  num: string;
  /** Дата начала в ISO 8601 или null, если ещё не объявлена. */
  start: string | null;
  /** Обложка события с CDN Networkly. */
  cover: string | null;
  /** Страница регистрации на Networkly. */
  url: string;
  /** Пост с материалами в телеграм-канале сообщества. */
  postUrl: string | null;
}
