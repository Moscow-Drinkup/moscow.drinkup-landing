import {PageConstructor, PageConstructorProvider, Theme} from '@gravity-ui/page-constructor';
import type {CustomConfig, PageContent} from '@gravity-ui/page-constructor';
import type {DrinkupEvent} from '@/shared/api';
import FaqBlock from './blocks/FaqBlock';
import GalleryBlock from './blocks/GalleryBlock';
import HeroBillboard from './blocks/HeroBillboard';
import ReviewsBlock from './blocks/ReviewsBlock';
import TeamBlock from './blocks/TeamBlock';

/**
 * Рендер страницы из конфигурации: состав, порядок и тексты блоков задаются
 * JSON-файлом в content/, а не кодом. Собственные блоки регистрируются как
 * custom и доступны из того же файла по своим типам.
 *
 * Всё рендерится на этапе сборки, гидрации нет: интерактив на страницах
 * держится на нативных элементах и инлайновых скриптах каркаса.
 */

type BlockComponent = CustomConfig['blocks'] extends Record<string, infer T> | undefined
  ? T
  : never;

const custom: CustomConfig = {
  blocks: {
    'hero-billboard': HeroBillboard as unknown as BlockComponent,
    faq: FaqBlock as unknown as BlockComponent,
    gallery: GalleryBlock as unknown as BlockComponent,
    reviews: ReviewsBlock as unknown as BlockComponent,
    team: TeamBlock as unknown as BlockComponent,
  },
};

interface Props {
  content: PageContent;
  /** Данные сборки, которые подмешиваются в блоки: их нет и не может быть в JSON. */
  event: DrinkupEvent | null;
}

/** Подставляет ближайшее мероприятие в блок афиши. */
const withRuntimeData = (content: PageContent, event: DrinkupEvent | null): PageContent => ({
  ...content,
  blocks: content.blocks?.map((block) =>
    block.type === 'hero-billboard' ? {...block, event} : block,
  ),
});

export const PageBlocks = ({content, event}: Props) => (
  <PageConstructorProvider theme={Theme.Dark}>
    <PageConstructor content={withRuntimeData(content, event)} custom={custom} />
  </PageConstructorProvider>
);

export default PageBlocks;
