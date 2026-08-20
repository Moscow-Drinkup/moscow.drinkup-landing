import {ThemeProvider} from '@gravity-ui/uikit';
import {PageConstructor, PageConstructorProvider, Theme} from '@gravity-ui/page-constructor';
import {HashRouter, Route, Routes} from 'react-router-dom';
import GalleryBlock from './components/GalleryBlock';
import TeamBlock from './components/TeamBlock';
import EventsBlock from './components/EventsBlock';
import {EventPage} from './components/EventPage';
import {TopNav} from './components/TopNav';
import {contentHome, contentPartners, contentVenues} from './content';
import {events} from './generated-events';
import type {PageContent} from '@gravity-ui/page-constructor';

const custom = {
  blocks: {
    gallery: GalleryBlock as unknown as React.ComponentType<any>,
    team: TeamBlock as unknown as React.ComponentType<any>,
    events: EventsBlock as unknown as React.ComponentType<any>,
  },
};

function Page({content}: {content: PageContent}) {
  return <PageConstructor content={content} custom={custom} />;
}

const SubPage = ({children}: {children: React.ReactNode}) => (
  <div className="drinkup-page drinkup-page--sub">{children}</div>
);

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
                <SubPage>
                  <Page content={contentVenues} />
                </SubPage>
              }
            />
            <Route
              path="/partners"
              element={
                <SubPage>
                  <Page content={contentPartners} />
                </SubPage>
              }
            />
            {events.map((e) => (
              <Route
                key={e.id}
                path={`/events/${e.id}`}
                element={
                  <SubPage>
                    <EventPage event={e} />
                  </SubPage>
                }
              />
            ))}
            <Route
              path="*"
              element={
                <SubPage>
                  <div style={{padding: '48px 24px', textAlign: 'center'}}>
                    Страница не найдена — <a href="#/">на главную</a>
                  </div>
                </SubPage>
              }
            />
          </Routes>
        </HashRouter>
      </PageConstructorProvider>
    </ThemeProvider>
  );
}

export default App;
