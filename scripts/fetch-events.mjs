// Подтягивает список мероприятий Moscow DrinkUp из API Networkly на этапе сборки.
// Результат — src/generated-events.ts (в .gitignore, генерируется при каждой сборке).
import {writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outFile = join(__dirname, '..', 'src', 'generated-events.ts');

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

async function main() {
  let events = [];
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
    console.warn('fetch-events: не удалось получить события из Networkly:', err?.message ?? err);
  }

  const next = events[0] ?? null;
  const code = `// Авто-генерируемый файл: мероприятия из API Networkly (см. scripts/fetch-events.mjs)\nexport const nextEvent = ${JSON.stringify(next, null, 2)} as const;\n\nexport const events = ${JSON.stringify(events, null, 2)} as const;\n`;
  writeFileSync(outFile, code, 'utf8');
  console.log(`fetch-events: ${events.length} мероприятий, ближайшее — ${next ? next.name : 'нет'}`);
}

main();
