// Подтягивает ближайшее событие Moscow DrinkUp из API Networkly на этапе сборки.
// Результат пишется в src/generated-event.ts (в .gitignore — генерируется при каждой сборке).
import {writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outFile = join(__dirname, '..', 'src', 'generated-event.ts');

async function main() {
  let next = null;
  try {
    const res = await fetch(
      'https://networkly.app/api/events?name=Moscow%20DrinkUp&itemsPerPage=50',
      {signal: AbortSignal.timeout(20000)},
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const members = data?.['hydra:member'] ?? [];
    const now = Date.now();

    // ближайшее будущее событие (с датой), иначе последнее published
    const withDate = members
      .filter((e) => e.start_datetime && new Date(e.start_datetime).getTime() > now)
      .sort((a, b) => new Date(a.start_datetime) - new Date(b.start_datetime));
    const candidate = withDate[0] || members.find((e) => e.status === 'published') || null;

    if (candidate) {
      next = {
        name: String(candidate.name ?? 'Moscow DrinkUp'),
        id: candidate.id,
        url: `https://networkly.app/event/${candidate.id}`,
        start: candidate.start_datetime ?? null,
      };
    }
  } catch (err) {
    console.warn('fetch-event: не удалось получить событие из Networkly:', err?.message ?? err);
  }

  const code = `// Авто-генерируемый файл: ближайшее событие из API Networkly (см. scripts/fetch-event.mjs)\nexport const nextEvent = ${JSON.stringify(next, null, 2)} as const;\n`;
  writeFileSync(outFile, code, 'utf8');
  console.log(
    next
      ? `fetch-event: ближайшее событие — ${next.name} (id ${next.id})`
      : 'fetch-event: событий не найдено, nextEvent = null',
  );
}

main();
