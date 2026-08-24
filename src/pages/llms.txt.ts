import type {APIRoute} from 'astro';

import {getEvents, getNextEvent} from '@/shared/api';
import {LINKS, SITE} from '@/shared/config';
import {formatEventDate, formatEventDateFull} from '@/shared/lib';

/**
 * Индекс сайта для AI-краулеров и суммаризаторов (llms.txt).
 *
 * Файл собирается на этапе сборки вместе со страницами, поэтому список
 * мероприятий в нём не расходится с сайтом — раньше он лежал в public
 * и правился руками.
 */
export const GET: APIRoute = async () => {
  const [events, nextEvent] = await Promise.all([getEvents(), getNextEvent()]);

  const lines = [
    `# ${SITE.name}`,
    `> ${SITE.description}`,
    '',
    '## Основные разделы',
    `- [Главная](${SITE.url}/): о сообществе, ближайший дринкап, отзывы, организаторы`,
    `- [Мероприятия](${SITE.url}/events): список всех дринкапов с датами`,
    `- [Площадкам](${SITE.url}/venues): условия для баров и площадок`,
    `- [Партнёрам](${SITE.url}/partners): спонсорские пакеты и кейсы`,
    '',
    '## Ключевые факты',
    '- Moscow DrinkUp — барные айти-митапы в Москве (ранее часть beerjs.global)',
    '- Формат: доклады и общение за кружкой пива, по четвергам, несколько раз в год',
    '- Участие бесплатное; пиво и закуски — за счёт участников',
    '- Локация сообщается подтверждённым участникам после регистрации',
    '- Организаторы: Паша Коршиков (@SayPoj), Василий Корянов (@grindpride), Евгений Кучерявый (@e_kucheriavyi)',
    `- Телеграм-канал: ${LINKS.telegramChannel}, чат: ${LINKS.telegramChat}`,
    `- Регистрация: ${LINKS.networkly}`,
  ];

  if (nextEvent) {
    lines.push(
      '',
      '## Ближайший дринкап',
      `- ${nextEvent.name}: ${formatEventDate(nextEvent.start) || 'дата уточняется'}, регистрация — ${nextEvent.url}`,
    );
  }

  // Ближайший дринкап уже назван выше отдельным разделом
  const past = events.filter((event) => event.id !== nextEvent?.id);

  if (past.length > 0) {
    lines.push('', '## Прошедшие мероприятия');
    for (const event of past) {
      const date = formatEventDateFull(event.start) || 'дата уточняется';
      lines.push(`- [${event.name}](${SITE.url}/events/${event.id}): ${date}`);
    }
  }

  lines.push('');

  return new Response(lines.join('\n'), {
    headers: {'Content-Type': 'text/plain; charset=utf-8'},
  });
};
