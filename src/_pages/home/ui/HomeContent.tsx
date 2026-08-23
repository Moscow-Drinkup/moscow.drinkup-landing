import {PageConstructor, PageConstructorProvider, Theme} from '@gravity-ui/page-constructor';
import type {PageContent} from '@gravity-ui/page-constructor';

/**
 * Обёртка PageConstructor для статического рендера в Astro.
 *
 * Компонент рендерится на этапе сборки и не гидрируется: интерактивные части
 * страницы вынесены в отдельные острова.
 */
export const HomeContent = ({content}: {content: PageContent}) => (
  <PageConstructorProvider theme={Theme.Dark}>
    <PageConstructor content={content} />
  </PageConstructorProvider>
);

export default HomeContent;
