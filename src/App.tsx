import {ThemeProvider} from '@gravity-ui/uikit';
import {PageConstructor, PageConstructorProvider, Theme} from '@gravity-ui/page-constructor';
import GalleryBlock from './components/GalleryBlock';
import {content} from './content';

const custom = {
  blocks: {
    gallery: GalleryBlock as unknown as React.ComponentType<any>,
  },
};

export function App() {
  return (
    <ThemeProvider theme="dark">
      <PageConstructorProvider theme={Theme.Dark}>
        <PageConstructor content={content} custom={custom} />
      </PageConstructorProvider>
    </ThemeProvider>
  );
}

export default App;
