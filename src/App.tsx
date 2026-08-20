import {ThemeProvider} from '@gravity-ui/uikit';
import {PageConstructor, PageConstructorProvider, Theme} from '@gravity-ui/page-constructor';
import {HashRouter, Route, Routes} from 'react-router-dom';
import GalleryBlock from './components/GalleryBlock';
import {TopNav} from './components/TopNav';
import {contentHome, contentPartners, contentVenues} from './content';
import type {PageContent} from '@gravity-ui/page-constructor';

const custom = {
  blocks: {
    gallery: GalleryBlock as unknown as React.ComponentType<any>,
  },
};

function Page({content}: {content: PageContent}) {
  return <PageConstructor content={content} custom={custom} />;
}

export function App() {
  return (
    <ThemeProvider theme="dark">
      <PageConstructorProvider theme={Theme.Dark}>
        <HashRouter>
          <TopNav />
          <Routes>
            <Route path="/" element={<Page content={contentHome} />} />
            <Route
              path="/venues"
              element={
                <div className="drinkup-page drinkup-page--sub">
                  <Page content={contentVenues} />
                </div>
              }
            />
            <Route
              path="/partners"
              element={
                <div className="drinkup-page drinkup-page--sub">
                  <Page content={contentPartners} />
                </div>
              }
            />
          </Routes>
        </HashRouter>
      </PageConstructorProvider>
    </ThemeProvider>
  );
}

export default App;
