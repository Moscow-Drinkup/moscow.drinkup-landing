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
  cover: string | null;
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
          <Link key={e.id} className="drinkup-event-card" to={`/events/${e.id}`}>
            {e.cover && (
              <img className="drinkup-event-card-cover" src={e.cover} alt={e.name} loading="lazy" />
            )}
            <div className="drinkup-event-card-body">
              <div className="drinkup-event-num">{e.num || e.name}</div>
              {formatEventDate(e.start) && (
                <div className="drinkup-event-date">{formatEventDate(e.start)}</div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsBlock;
