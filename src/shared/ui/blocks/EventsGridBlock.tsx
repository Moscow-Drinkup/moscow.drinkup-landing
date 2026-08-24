import type {DrinkupEvent} from '@/shared/api';
import {formatEventDate, toIsoDate, withBase} from '@/shared/lib';

import './event-card.css';
import './page-header.css';

export interface EventsGridBlockProps {
  /** Список приходит из данных сборки, в JSON его нет. */
  events?: DrinkupEvent[];
  /** Идентификатор ближайшего дринкапа — он помечается меткой. */
  upcomingId?: number | null;
  emptyText: string;
  upcomingLabel: string;
}

/** Сетка карточек всех дринкапов. */
export const EventsGridBlock = ({
  events = [],
  upcomingId = null,
  emptyText,
  upcomingLabel,
}: EventsGridBlockProps) => (
  <section className="events-grid">
    {events.length > 0 ? (
      <ul className="events-grid__list">
        {events.map((event) => {
          const date = formatEventDate(event.start);

          return (
            <li className="event-card" key={event.id}>
              <a className="event-card__link" href={withBase(`/events/${event.id}`)}>
                {event.cover && (
                  <img
                    className="event-card__cover"
                    src={event.cover}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                )}

                <div className="event-card__body">
                  {event.id === upcomingId && <p className="event-card__badge">{upcomingLabel}</p>}
                  <p className="event-card__num">{event.num || event.name}</p>
                  {date && (
                    <time
                      className="event-card__date"
                      dateTime={toIsoDate(event.start) ?? undefined}
                    >
                      {date}
                    </time>
                  )}
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    ) : (
      <p className="events-grid__empty">{emptyText}</p>
    )}
  </section>
);

export default EventsGridBlock;
