import {Button} from '@gravity-ui/uikit';
import {Link} from 'react-router-dom';
import {formatEventDate} from '../components/blocks/events/EventsBlock';
import type {EventItem} from '../components/blocks/events/EventsBlock';
import './event-page.css';

export const EventPage = ({event}: {event: EventItem}) => {
  const date = formatEventDate(event.start);
  return (
    <div className="drinkup-event-page">
      <Link to="/events" className="drinkup-event-back">
        ← Все мероприятия
      </Link>
      <h1 className="drinkup-event-title">{event.name}</h1>
      {date && <div className="drinkup-event-date">{date}</div>}
      {event.cover && <img className="drinkup-event-cover" src={event.cover} alt={event.name} />}

      <div className="drinkup-event-actions">
        <Button
          view="action"
          size="l"
          href={event.url}
          target="_blank"
          rel="noopener noreferrer"
          extraProps={{rel: 'noopener noreferrer'}}
        >
          Страница на Networkly
        </Button>
        {event.postUrl && (
          <Button
            view="outlined"
            size="l"
            href={event.postUrl}
            target="_blank"
            rel="noopener noreferrer"
            extraProps={{rel: 'noopener noreferrer'}}
          >
            Фото и материалы в канале
          </Button>
        )}
      </div>

      <p className="drinkup-event-note">
        Регистрация, доклады и детали — на странице мероприятия на Networkly. Фото и отчётные
        материалы публикуем в телеграм-канале.
      </p>
    </div>
  );
};
