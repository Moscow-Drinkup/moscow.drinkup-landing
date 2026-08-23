import type {DrinkupEvent} from './types';
import snapshot from './events-snapshot.json';

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

/** Только события с материалами в канале, свежие сверху. */
const prepare = (events: DrinkupEvent[]): DrinkupEvent[] =>
  events.filter((event) => event.postUrl !== null).sort((a, b) => b.id - a.id);

export const getEvents = async (): Promise<DrinkupEvent[]> => {
  try {
    const response = await fetch(API_URL, {signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)});
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = (await response.json()) as {'hydra:member'?: NetworklyEvent[]};
    const events = prepare((data['hydra:member'] ?? []).map(toDrinkupEvent));

    if (events.length === 0) {
      throw new Error('пустой список мероприятий');
    }

    return events;
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    console.warn(`[networkly] API недоступен (${reason}), используется снапшот из репозитория`);
    return prepare(snapshot as DrinkupEvent[]);
  }
};

/** Ближайший (самый свежий) дринкап или null, если список пуст. */
export const getNextEvent = async (): Promise<DrinkupEvent | null> => {
  const events = await getEvents();
  return events[0] ?? null;
};
