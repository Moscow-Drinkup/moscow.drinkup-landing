// Подтягивает список мероприятий Moscow DrinkUp из API Networkly на этапе сборки.
// Результаты:
//  - src/generated-events.ts   (в .gitignore) — данные для React-компонентов
//  - src/generated-jsonld.json (в .gitignore) — JSON-LD (Organization/WebSite/Event) для index.html
//  - public/sitemap.xml        — sitemap с lastmod (без priority/changefreq — Google их игнорирует)
//  - public/llms.txt           — индекс для AI-краулеров (не для Google, но для остальных)
import {writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const outFile = join(ROOT, 'src', 'generated-events.ts');
const jsonldFile = join(ROOT, 'src', 'generated-jsonld.json');
const sitemapFile = join(ROOT, 'public', 'sitemap.xml');
const llmsFile = join(ROOT, 'public', 'llms.txt');

const SITE_URL = 'https://drinkup.moscow';
const ORG_ID = `${SITE_URL}/#organization`;

// id события на networkly -> id поста в канале с материалами (фото/отчёт/анонс)
const POST_BY_EVENT = {
  6699: 145, // #11 — анонс и регистрация
  6376: 140, // #10 — фотоотчёт
  5284: 124, // #8 — материалы
  5125: 110, // #7 — фото
  4757: 97,  // #6 — фото
  4603: 78,  // #5 — материалы и видео
  4453: 58,  // #4 — фото
  4189: 36,  // #3 — фото
};

const moscowPlace = {
  '@type': 'Place',
  name: 'Москва',
  address: {'@type': 'PostalAddress', addressLocality: 'Москва', addressCountry: 'RU'},
  geo: {'@type': 'GeoCoordinates', latitude: 55.755826, longitude: 37.6173},
};

function buildJsonLd(events) {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Moscow DrinkUp',
    alternateName: 'Moscow DrinkUp — барные айти-митапы',
    url: SITE_URL + '/',
    logo: SITE_URL + '/img/logo.png',
    description:
      'Неформальные барные айти-митапы в Москве: экспертные доклады и общение за кружкой пива, по четвергам.',
    address: {'@type': 'PostalAddress', addressLocality: 'Москва', addressCountry: 'RU'},
    geo: {'@type': 'GeoCoordinates', latitude: 55.755826, longitude: 37.6173},
    areaServed: 'Москва',
    sameAs: [
      'https://t.me/moscow_drinkup',
      'https://t.me/drinkup_moscow',
      'https://boosty.to/beerjs_moscow_drinkup',
      'https://networkly.app/community/moscow_drinkup',
    ],
  };
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Moscow DrinkUp',
    url: SITE_URL + '/',
    inLanguage: 'ru-RU',
    publisher: {'@id': ORG_ID},
  };
  const nextId = events[0]?.id;
  const eventSchemas = events.map((e) => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: e.name,
      url: `${SITE_URL}/#/events/${e.id}`,
      description: `Барный айти-митап ${e.name} в Москве: экспертные доклады и общение за кружкой пива. Участие бесплатное, нужна регистрация.`,
      location: moscowPlace,
      organizer: {'@id': ORG_ID},
    };
    if (e.cover) schema.image = e.cover;
    if (e.start) schema.startDate = new Date(e.start).toISOString();
    if (e.id === nextId) {
      schema.eventStatus = 'https://schema.org/EventScheduled';
      schema.eventAttendanceMode = 'https://schema.org/OfflineEventAttendanceMode';
      schema.offers = {
        '@type': 'Offer',
        url: e.url,
        price: '0',
        priceCurrency: 'RUB',
        availability: 'https://schema.org/InStock',
      };
    }
    return schema;
  });
  return {organization, website, events: eventSchemas};
}

function buildSitemap(events) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    {loc: SITE_URL + '/', lastmod: today},
    {loc: SITE_URL + '/#/events', lastmod: today},
    {loc: SITE_URL + '/#/venues', lastmod: today},
    {loc: SITE_URL + '/#/partners', lastmod: today},
    ...events.map((e) => ({
      loc: `${SITE_URL}/#/events/${e.id}`,
      lastmod: (e.start || today).slice(0, 10),
    })),
  ];
  const rows = urls
    .map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n  </url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows}\n</urlset>\n`;
}

function buildLlmstxt(events) {
  const lines = [
    '# Moscow DrinkUp',
    '> Неформальные барные айти-митапы в Москве: экспертные доклады за кружкой пива, по четвергам. Участие бесплатное, регистрация через Networkly.',
    '',
    '## Основные разделы',
    '- [Главная](' + SITE_URL + '/): о сообществе, ближайший дринкап, отзывы, организаторы',
    '- [Мероприятия](' + SITE_URL + '/#/events): список всех дринкапов с датами',
    '- [Площадкам](' + SITE_URL + '/#/venues): информация для баров и площадок',
    '- [Партнёрам](' + SITE_URL + '/#/partners): спонсорские пакеты и кейсы',
    '',
    '## Ключевые факты',
    '- Moscow DrinkUp — барные айти-митапы в Москве (ранее — часть beerjs.global)',
    '- Формат: доклады и общение за кружкой пива, по четвергам, несколько раз в год',
    '- Участие бесплатное; пиво и закуски — за счёт участников',
    '- Организаторы: Паша Коршиков (@SayPoj), Василий Корянов (@grindpride), Евгений Кучерявый (@e_kucheriavyi)',
    '- Телеграм-канал: @moscow_drinkup, чат: @drinkup_moscow',
    '- Регистрация: https://networkly.app/community/moscow_drinkup',
  ];
  if (events.length) {
    lines.push('', '## Мероприятия');
    for (const e of events) {
      const date = e.start
        ? new Date(e.start).toLocaleDateString('ru-RU', {day: 'numeric', month: 'long', year: 'numeric'})
        : 'дата уточняется';
      lines.push(`- [${e.name}](${SITE_URL}/#/events/${e.id}): ${date}, регистрация — ${e.url}`);
    }
  }
  lines.push('');
  return lines.join('\n');
}

async function main() {
  let events = [];
  let apiOk = true;
  try {
    const res = await fetch(
      'https://networkly.app/api/events?name=Moscow%20DrinkUp&itemsPerPage=50',
      {signal: AbortSignal.timeout(20000)},
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const members = data?.['hydra:member'] ?? [];

    events = members
      .map((e) => {
        const num = (String(e.name ?? '').match(/#\d+/) || [''])[0];
        const postId = POST_BY_EVENT[e.id];
        const coverPaths = e.cover?.paths ?? {};
        return {
          id: e.id,
          name: String(e.name ?? `Moscow DrinkUp ${num}`),
          num,
          start: e.startDatetime ?? e.start_datetime ?? null,
          cover: coverPaths.to_webp ?? coverPaths.original ?? null,
          url: `https://networkly.app/event/${e.id}`,
          postId: postId ?? null,
          postUrl: postId ? `https://t.me/moscow_drinkup/${postId}` : null,
        };
      })
      .filter((e) => e.postId) // только те, где есть материалы в канале
      .sort((a, b) => b.id - a.id);
  } catch (err) {
    apiOk = false;
    console.warn('fetch-events: не удалось получить события из Networkly:', err?.message ?? err);
  }

  const next = events[0] ?? null;
  const code = `// Авто-генерируемый файл: мероприятия из API Networkly (см. scripts/fetch-events.mjs)\nexport const nextEvent = ${JSON.stringify(next, null, 2)} as const;\n\nexport const events = ${JSON.stringify(events, null, 2)} as const;\n`;
  writeFileSync(outFile, code, 'utf8');
  console.log(`fetch-events: ${events.length} мероприятий, ближайшее — ${next ? next.name : 'нет'}`);

  // SEO-файлы обновляем только при успешном ответе API (иначе сохраняем последние корректные)
  if (apiOk) {
    writeFileSync(jsonldFile, JSON.stringify(buildJsonLd(events), null, 2), 'utf8');
    writeFileSync(sitemapFile, buildSitemap(events), 'utf8');
    writeFileSync(llmsFile, buildLlmstxt(events), 'utf8');
    console.log('seo: JSON-LD, sitemap.xml и llms.txt обновлены');
  }
}

main();
