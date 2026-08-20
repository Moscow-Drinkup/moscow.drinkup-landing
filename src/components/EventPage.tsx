import {Button} from '@gravity-ui/uikit';
import {Link} from 'react-router-dom';
import {formatEventDate} from './EventsBlock';
import type {EventItem} from './EventsBlock';
import './event-page.css';

export const EventPage = ({event}: {event: EventItem}) => {
  const date = formatEventDate(event.start);
  return (
    <div className="drinkup-event-page">
      <Link to="/" className="drinkup-event-back">
        ← На главную
      </Link>
      <h1 className="drinkup-event-title">{event.name}</h1>
      {date && <div className="drinkup-event-date">{date}</div>}

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
