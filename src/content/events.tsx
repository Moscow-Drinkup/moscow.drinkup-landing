import {BlockType} from '@gravity-ui/page-constructor';
import type {PageContent} from '@gravity-ui/page-constructor';
import {footerBlock} from './shared';
import {events} from '../generated-events';

/* ================= МЕРОПРИЯТИЯ ================= */
export const contentEvents: PageContent = {
  background: {color: '#0b0907'},
  blocks: [
    {
      type: BlockType.HeaderBlock,
      overtitle: 'Для участников',
      title: 'Мероприятия',
      description:
        'Барные айти-митапы Moscow DrinkUp: нумерованные дринкапы по четвергам. Дата следующего дринкапа появляется здесь, как только её объявляют в сообществе на Networkly.',
      background: {color: '#0b0907'},
      theme: 'dark',
      verticalOffset: 'l',
    },
    {
      type: 'events',
      title: 'Все дринкапы',
      items: events,
    },
    footerBlock,
  ],
};
