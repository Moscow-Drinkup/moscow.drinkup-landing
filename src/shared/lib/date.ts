const MOSCOW_TIME_ZONE = 'Europe/Moscow';

const formatter = new Intl.DateTimeFormat('ru-RU', {
  timeZone: MOSCOW_TIME_ZONE,
  day: 'numeric',
  month: 'long',
  weekday: 'long',
});

const parse = (start: string | null): Date | null => {
  if (!start) {
    return null;
  }

  const date = new Date(start);
  return Number.isNaN(date.getTime()) ? null : date;
};

/**
 * Дата дринкапа в формате «27 августа, четверг».
 *
 * Считается в московском времени: страницы генерируются на сборочной машине
 * в UTC, и без явной зоны вечерний митап уезжал бы на соседний день.
 * Порядок частей собирается вручную — Intl для ru-RU отдаёт «четверг, 27 августа».
 */
export const formatEventDate = (start: string | null): string => {
  const date = parse(start);
  if (!date) {
    return '';
  }

  const parts = formatter.formatToParts(date);
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? '';

  const day = get('day');
  const month = get('month');
  const weekday = get('weekday');

  return weekday ? `${day} ${month}, ${weekday}` : `${day} ${month}`;
};

const fullFormatter = new Intl.DateTimeFormat('ru-RU', {
  timeZone: MOSCOW_TIME_ZONE,
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

/** Дата с годом — «6 марта 2026 года». Нужна там, где событие давно прошло. */
export const formatEventDateFull = (start: string | null): string => {
  const date = parse(start);
  return date ? fullFormatter.format(date) : '';
};

/** Момент времени в ISO 8601 — для атрибута datetime и разметки schema.org. */
export const toIsoDate = (start: string | null): string | null =>
  parse(start)?.toISOString() ?? null;
