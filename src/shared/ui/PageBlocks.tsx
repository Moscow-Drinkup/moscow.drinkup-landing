import type {CustomConfig, PageContent} from '@gravity-ui/page-constructor';
import {PageConstructor, PageConstructorProvider, Theme} from '@gravity-ui/page-constructor';

import type {DrinkupEvent} from '@/shared/api';

import EventDetailsBlock from './blocks/EventDetailsBlock';
import EventsGridBlock from './blocks/EventsGridBlock';
import FaqBlock from './blocks/FaqBlock';
import GalleryBlock from './blocks/GalleryBlock';
import HeroBillboard from './blocks/HeroBillboard';
import InfoSplitBlock from './blocks/InfoSplitBlock';
import PageHeaderBlock from './blocks/PageHeaderBlock';
import ReviewsBlock from './blocks/ReviewsBlock';
import TabsBlock from './blocks/TabsBlock';
import TeamBlock from './blocks/TeamBlock';

/**
 * Рендер страницы из конфигурации: состав, порядок и тексты блоков задаются
 * JSON-файлом в content/, а не кодом. Собственные блоки регистрируются как
 * custom и доступны из тех же файлов по своим типам.
 *
 * Всё рендерится на этапе сборки, гидрации нет: интерактив на страницах
 * держится на нативных элементах и инлайновых скриптах каркаса.
 */

type BlockComponent = CustomConfig['blocks'] extends Record<string, infer T> | undefined
  ? T
  : never;

const asBlock = (component: unknown) => component as BlockComponent;

const custom: CustomConfig = {
  blocks: {
    'page-header': asBlock(PageHeaderBlock),
    'hero-billboard': asBlock(HeroBillboard),
    'events-grid': asBlock(EventsGridBlock),
    'event-details': asBlock(EventDetailsBlock),
    'info-split': asBlock(InfoSplitBlock),
    tabs: asBlock(TabsBlock),
    faq: asBlock(FaqBlock),
    gallery: asBlock(GalleryBlock),
    reviews: asBlock(ReviewsBlock),
    team: asBlock(TeamBlock),
  },
};

/** Данные сборки, которых нет и не может быть в файле с контентом. */
export interface RuntimeData {
  /** Ближайший предстоящий дринкап — для афиши на главной. */
  nextEvent?: DrinkupEvent | null;
  /** Архив мероприятий — для списка на странице мероприятий. */
  events?: DrinkupEvent[];
  /** Конкретное мероприятие — для страницы события. */
  event?: DrinkupEvent;
}

/** Подмешивает данные сборки в блоки, которые их ожидают. */
const withRuntimeData = (content: PageContent, data: RuntimeData): PageContent => ({
  ...content,
  blocks: content.blocks?.map((block) => {
    switch (block.type) {
      case 'hero-billboard':
        return {...block, event: data.nextEvent ?? null};
      case 'events-grid':
        return {...block, events: data.events ?? [], upcomingId: data.nextEvent?.id ?? null};
      case 'event-details':
        return {...block, event: data.event};
      default:
        return block;
    }
  }),
});

interface Props {
  content: PageContent;
  data?: RuntimeData;
}

export const PageBlocks = ({content, data = {}}: Props) => (
  <PageConstructorProvider theme={Theme.Dark}>
    <PageConstructor content={withRuntimeData(content, data)} custom={custom} />
  </PageConstructorProvider>
);

export default PageBlocks;
