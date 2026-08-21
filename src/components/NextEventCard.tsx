import {Button} from '@gravity-ui/uikit';
import {Link} from 'react-router-dom';
import {nextEvent} from '../generated-events';
import {formatEventDate} from './EventsBlock';
import './next-event-card.css';

const TG_TARGET = {target: '_blank', rel: 'noopener noreferrer'} as const;

/**
 * Карточка ближайшего мероприятия в hero: баннер, название, дата и кнопка
 * регистрации на Networkly. Данные приходят из API на этапе сборки.
 */
export const NextEventCard = () => {
  if (!nextEvent) return null;

  const num = (nextEvent.name.match(/#\d+/) || [])[0] || '';
  const date = formatEventDate(nextEvent.start);

  return (
    <div className="drinkup-next-card">
      {nextEvent.cover && (
        <a
          className="drinkup-next-card-media"
          href={nextEvent.url}
          {...TG_TARGET}
          aria-label={`${nextEvent.name} — баннер`}
        >
          <img src={nextEvent.cover} alt={nextEvent.name} />
        </a>
      )}
      <div className="drinkup-next-card-body">
        <div className="drinkup-next-card-label">
          Ближайший дринкап{num ? ` ${num}` : ''}
        </div>
        <div className="drinkup-next-card-name">{nextEvent.name}</div>
        {date && <div className="drinkup-next-card-date">{date}</div>}
        <div className="drinkup-next-card-actions">
          <Button
            view="action"
            size="l"
            href={nextEvent.url}
            extraProps={TG_TARGET}
          >
            Зарегистрироваться
          </Button>
          <Link className="drinkup-next-card-all" to="/events">
            Все мероприятия →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NextEventCard;
