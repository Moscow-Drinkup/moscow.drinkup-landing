import snapshot from './events-snapshot.json';
import type {DrinkupEvent} from './types';

/**
 * Мероприятия сообщества из API Networkly.
 *
 * Запрос выполняется на этапе сборки — во frontmatter страниц. Если API
 * недоступен, используется снапшот из репозитория: сборка сайта не должна
 * падать из-за стороннего сервиса.
 */

const API_URL = 'https://networkly.app/api/events?name=Moscow%20DrinkUp&itemsPerPage=50';
const REQUEST_TIMEOUT_MS = 20_000;

/** id события в Networkly -> id поста с материалами в канале @moscow_drinkup. */
const POST_BY_EVENT: Record<number, number> = {
  6699: 145,
  6376: 140,
  5284: 124,
  5125: 110,
  4757: 97,
  4603: 78,
  4453: 58,
  4189: 36,
};

interface NetworklyEvent {
  id: number;
  name?: string;
  startDatetime?: string | null;
  cover?: {paths?: {to_webp?: string; original?: string}};
}

/**
 * Networkly отдаёт время без часового пояса («2026-08-27T19:00:00»), имея
 * в виду московское. Без явного смещения Date истолковал бы строку по зоне
 * машины: локально и на сборщике в UTC получились бы разные моменты времени.
 */
const withMoscowOffset = (value: string | null | undefined): string | null => {
  if (!value) {
    return null;
  }

  const hasTimezone = /(?:Z|[+-]\d{2}:?\d{2})$/.test(value);
  return hasTimezone ? value : `${value}+03:00`;
};

const toDrinkupEvent = (raw: NetworklyEvent): DrinkupEvent => {
  const postId = POST_BY_EVENT[raw.id];
  const coverPaths = raw.cover?.paths ?? {};

  return {
    id: raw.id,
    name: String(raw.name ?? 'Moscow DrinkUp'),
    num: (String(raw.name ?? '').match(/#\d+/) ?? [''])[0],
    start: withMoscowOffset(raw.startDatetime),
    cover: coverPaths.to_webp ?? coverPaths.original ?? null,
    url: `https://networkly.app/event/${raw.id}`,
    postUrl: postId ? `https://t.me/moscow_drinkup/${postId}` : null,
  };
};

/** Свежие сверху. Сортировка по дате, а не по id: митап могли перенести. */
const byDateDesc = (events: DrinkupEvent[]): DrinkupEvent[] =>
  [...events].sort((a, b) => {
    const left = a.start ? Date.parse(a.start) : 0;
    const right = b.start ? Date.parse(b.start) : 0;
    return right - left;
  });

/** Все мероприятия сообщества, включая ещё не прошедшие. */
const fetchAll = async (): Promise<DrinkupEvent[]> => {
  try {
    const response = await fetch(API_URL, {signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)});
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = (await response.json()) as {'hydra:member'?: NetworklyEvent[]};
    const events = byDateDesc((data['hydra:member'] ?? []).map(toDrinkupEvent));

    if (events.length === 0) {
      throw new Error('пустой список мероприятий');
    }

    return events;
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    console.warn(`[networkly] API недоступен (${reason}), используется снапшот из репозитория`);
    return byDateDesc(snapshot as DrinkupEvent[]);
  }
};

/**
 * Архив дринкапов для страницы мероприятий: только те, по которым есть пост
 * с материалами в канале — иначе странице не на что ссылаться.
 */
export const getEvents = async (): Promise<DrinkupEvent[]> => {
  const events = await fetchAll();
  return events.filter((event) => event.postUrl !== null);
};

/**
 * Ближайший предстоящий дринкап или null, если следующая дата ещё не объявлена.
 *
 * Считается по всем мероприятиям, а не по архиву: у только что анонсированного
 * события поста с материалами ещё нет и быть не может. Прошедшие отсекаются по
 * дате — иначе главная продолжала бы звать на состоявшийся митап.
 */
export const getNextEvent = async (): Promise<DrinkupEvent | null> => {
  const events = await fetchAll();
  const now = Date.now();

  const upcoming = events
    .filter((event) => event.start !== null && Date.parse(event.start) >= now)
    .sort((a, b) => Date.parse(a.start ?? '') - Date.parse(b.start ?? ''));

  return upcoming[0] ?? null;
};
