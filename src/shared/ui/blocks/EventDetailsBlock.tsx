import type {DrinkupEvent} from '@/shared/api';
import {EXTERNAL_LINK_ATTRS} from '@/shared/config';
import {formatEventDate, toIsoDate, withBase} from '@/shared/lib';

import './event-details.css';

export interface EventDetailsBlockProps {
  /** Мероприятие подставляется маршрутом, в JSON его нет. */
  event?: DrinkupEvent;
  backLabel: string;
  registrationLabel: string;
  materialsLabel: string;
  note: string;
}

/** Страница одного дринкапа. */
export const EventDetailsBlock = ({
  event,
  backLabel,
  registrationLabel,
  materialsLabel,
  note,
}: EventDetailsBlockProps) => {
  if (!event) {
    return null;
  }

  const date = formatEventDate(event.start);

  return (
    <article className="event">
      <a className="event__back" href={withBase('/events')}>
        {backLabel}
      </a>

      <h1 className="event__title">{event.name}</h1>
      {date && (
        <time className="event__date" dateTime={toIsoDate(event.start) ?? undefined}>
          {date}
        </time>
      )}

      {event.cover && (
        <img className="event__cover" src={event.cover} alt="" width="1200" height="675" />
      )}

      <div className="event__actions">
        <a className="event__cta" href={event.url} {...EXTERNAL_LINK_ATTRS}>
          {registrationLabel}
        </a>
        {event.postUrl && (
          <a className="event__secondary" href={event.postUrl} {...EXTERNAL_LINK_ATTRS}>
            {materialsLabel}
          </a>
        )}
      </div>

      <p className="event__note">{note}</p>
    </article>
  );
};

export default EventDetailsBlock;
