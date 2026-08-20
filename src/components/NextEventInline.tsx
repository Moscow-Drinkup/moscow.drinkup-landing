import {nextEvent} from '../generated-event';
import './next-event.css';

const MONTHS = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
];
const WEEKDAYS = [
  'воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота',
];

export const NextEventInline = () => {
  if (!nextEvent) return null;

  const num = (nextEvent.name.match(/#\d+/) || [])[0] || '';
  let when = '';
  if (nextEvent.start) {
    const d = new Date(nextEvent.start);
    when = ` · ${d.getDate()} ${MONTHS[d.getMonth()]}, ${WEEKDAYS[d.getDay()]}`;
  }

  return (
    <a className="drinkup-next-event" href={nextEvent.url} target="_blank" rel="noopener noreferrer">
      <span className="drinkup-next-event-label">Ближайший дринкап{num ? ` ${num}` : ''}</span>
      {when && <span className="drinkup-next-event-when">{when.replace(' · ', '')}</span>}
    </a>
  );
};
