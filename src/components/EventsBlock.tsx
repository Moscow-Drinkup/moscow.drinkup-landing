import {Card} from '@gravity-ui/uikit';
import {Link} from 'react-router-dom';
import './event-page.css';

const MONTHS = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
];
const WEEKDAYS = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

export type EventItem = {
  id: number;
  name: string;
  num: string;
  start: string | null;
  url: string;
  postId: number | null;
  postUrl: string | null;
};

export const formatEventDate = (start: string | null): string => {
  if (!start) return '';
  const d = new Date(start);
  return `${d.getDate()} ${MONTHS[d.getMonth()]}, ${WEEKDAYS[d.getDay()]}`;
};

export type EventsBlockProps = {
  items: EventItem[];
  title?: string;
};

const EventsBlock = ({items, title = 'Последние мероприятия'}: EventsBlockProps) => {
  if (!items.length) return null;
  return (
    <div className="drinkup-events-section">
      <h2 className="drinkup-events-title">{title}</h2>
      <div className="drinkup-events">
        {items.map((e) => (
          <Card key={e.id} className="drinkup-event-card" view="outlined" type="container" size="m">
            <div className="drinkup-event-num">{e.num || e.name}</div>
            {formatEventDate(e.start) && (
              <div className="drinkup-event-date">{formatEventDate(e.start)}</div>
            )}
            <Link className="drinkup-event-link" to={`/events/${e.id}`}>
              Страница мероприятия →
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EventsBlock;
