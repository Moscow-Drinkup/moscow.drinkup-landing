const MONTHS = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

const WEEKDAYS = [
  'воскресенье',
  'понедельник',
  'вторник',
  'среда',
  'четверг',
  'пятница',
  'суббота',
];

/**
 * Дата дринкапа в формате «27 августа, четверг».
 *
 * Считается в московском времени: страницы генерируются на сборочной машине
 * в UTC, и без явной зоны вечерний митап уезжал бы на день назад.
 */
export const formatEventDate = (start: string | null): string => {
  if (!start) {
    return '';
  }

  const date = new Date(start);
  if (Number.isNaN(date.getTime())) {
    return '';
  }

  const moscow = new Date(date.toLocaleString('en-US', {timeZone: 'Europe/Moscow'}));
  return `${moscow.getDate()} ${MONTHS[moscow.getMonth()]}, ${WEEKDAYS[moscow.getDay()]}`;
};

/** Дата в формате YYYY-MM-DD — для атрибута datetime и разметки schema.org. */
export const toIsoDate = (start: string | null): string | null => {
  if (!start) {
    return null;
  }

  const date = new Date(start);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
};
