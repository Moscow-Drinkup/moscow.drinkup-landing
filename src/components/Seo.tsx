import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {events} from '../generated-events';
import {formatEventDate} from './EventsBlock';

type PageMeta = {title: string; description: string};

const ROUTE_META: Record<string, PageMeta> = {
  '/': {
    title: 'Moscow DrinkUp — барные айти-митапы в Москве',
    description:
      'Moscow DrinkUp — неформальные барные айти-митапы в Москве: экспертные доклады за кружкой пива, по четвергам. Участие бесплатное — регистрируйтесь на ближайший дринкап.',
  },
  '/events': {
    title: 'Мероприятия — Moscow DrinkUp | барные айти-митапы в Москве',
    description:
      'Все дринкапы Moscow DrinkUp: даты, площадки и регистрация. Ближайший барный айти-митап в Москве — бесплатно, по четвергам.',
  },
  '/venues': {
    title: 'Площадкам — Moscow DrinkUp | барные айти-митапы',
    description:
      'Провести барный айти-митап у себя: формат сотрудничества с барами и площадками Москвы. Полный зал в четверг — это про нас.',
  },
  '/partners': {
    title: 'Партнёрам — Moscow DrinkUp | барные айти-митапы',
    description:
      'Спонсорские пакеты Moscow DrinkUp: глубокое касание IT-аудитории в неформальной обстановке. Кейс «Пивка для рывка» и условия партнёрства.',
  },
};

/** Устанавливает уникальные title и meta description для каждого маршрута. */
export function Seo() {
  const {pathname} = useLocation();

  useEffect(() => {
    let meta: PageMeta | undefined = ROUTE_META[pathname];
    if (!meta) {
      const m = pathname.match(/^\/events\/(\d+)/);
      if (m) {
        const ev = events.find((e) => e.id === Number(m[1]));
        if (ev) {
          const date = formatEventDate(ev.start);
          meta = {
            title: `${ev.name}${date ? `, ${date}` : ''} — барный айти-митап в Москве`,
            description: `${ev.name} — бесплатный барный айти-митап в Москве${date ? `, ${date}` : ''}. Экспертные доклады за кружкой пива. Регистрация открыта.`,
          };
        }
      }
    }
    if (meta) {
      document.title = meta.title;
      // Open Graph: обновляем title/description/url для текущего маршрута
      const setMeta = (property: string, content: string) => {
        let el = document.querySelector(`meta[property="${property}"]`);
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute('property', property);
          document.head.appendChild(el);
        }
        el.setAttribute('content', content);
      };
      setMeta('og:title', meta.title);
      setMeta('og:description', meta.description);
      setMeta('og:url', 'https://drinkup.moscow/');
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', meta.description);
    }
  }, [pathname]);

  return null;
}
