import {lazy, Suspense, useEffect} from 'react';
import {ThemeProvider} from '@gravity-ui/uikit';
import {PageConstructorProvider, Theme} from '@gravity-ui/page-constructor';
import {HashRouter, Route, Routes, useLocation} from 'react-router-dom';
import {TopNav} from './components/TopNav';
import {Page} from './components/PageShell';
import {contentHome} from './content/home';

// Ленивые роуты: код под-страниц грузится отдельными чанками
const VenuesPage = lazy(() => import('./pages/VenuesPage'));
const PartnersPage = lazy(() => import('./pages/PartnersPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const EventDetailPage = lazy(() => import('./pages/EventDetailPage'));

// Скролл к блоку «Организаторы» (#team) по ссылке вида #/?orgs
function OrgAnchor() {
  useEffect(() => {
    let tries = 0;
    const attempt = () => {
      if (!window.location.hash.includes('orgs')) return;
      const el = document.getElementById('team');
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 72;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({top: y, behavior: reduceMotion ? 'auto' : 'smooth'});
      } else if (tries++ < 30) {
        setTimeout(attempt, 100);
      }
    };
    attempt();
    window.addEventListener('hashchange', attempt);
    return () => window.removeEventListener('hashchange', attempt);
  }, []);
  return null;
}

// Доступность: цель для skip-link (main), корректный порядок заголовков в футере
function AppFixes() {
  const loc = useLocation();
  useEffect(() => {
    const main = document.querySelector('main');
    if (main && !main.id) main.id = 'main';
    // Заголовки колонок футера рендерятся как h6 — приводим к h2 (порядок заголовков)
    document.querySelectorAll('h6.pc-footer-block__column-title').forEach((h) => {
      const h2 = document.createElement('h2');
      h2.className = h.className;
      h2.textContent = h.textContent;
      h.replaceWith(h2);
    });
    // Заголовок hero на главной рендерится как h2 в div — делаем h1 (единственный на странице)
    document.querySelectorAll('.pc-hero-block__content .pc-title-item').forEach((el) => {
      if (el.tagName !== 'H1') {
        const h1 = document.createElement('h1');
        h1.className = el.className;
        h1.innerHTML = el.innerHTML;
        el.replaceWith(h1);
      }
    });
  }, [loc]);
  return null;
}

export function App() {
  return (
    <ThemeProvider theme="dark">
      <PageConstructorProvider theme={Theme.Dark}>
        <HashRouter>
          <TopNav />
          <OrgAnchor />
          <AppFixes />
          <Suspense fallback={<div className="drinkup-page-loader" />}>
            <Routes>
              <Route path="/" element={<Page content={contentHome} />} />
              <Route path="/venues" element={<VenuesPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/events/:id" element={<EventDetailPage />} />
              <Route
                path="*"
                element={
                  <div style={{padding: '48px 24px', textAlign: 'center'}}>
                    Страница не найдена — <a href="#/">на главную</a>
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </HashRouter>
      </PageConstructorProvider>
    </ThemeProvider>
  );
}

export default App;
