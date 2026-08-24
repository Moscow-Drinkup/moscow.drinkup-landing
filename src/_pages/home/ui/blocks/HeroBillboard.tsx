import {EXTERNAL_LINK_ATTRS, LINKS} from '@/shared/config';
import {formatEventDate, toIsoDate, withBase} from '@/shared/lib';
import type {DrinkupEvent} from '@/shared/api';
import './hero.css';

export interface HeroBillboardProps {
  /** Ближайший дринкап. Приходит из данных сборки, а не из JSON с контентом. */
  event?: DrinkupEvent | null;
  overtitle: string;
  titleMain: string;
  titleAccent: string;
  lead: string;
  backgroundImage: string;
  where: string;
  entrance: string;
  pastLabel: string;
}

/**
 * Первый экран — афиша ближайшего дринкапа.
 *
 * Блок зарегистрирован в PageConstructor как собственный тип hero-billboard,
 * поэтому попадает в JSON с контентом наравне со встроенными блоками.
 * Рендерится на этапе сборки и не гидрируется.
 */
export const HeroBillboard = ({
  event,
  overtitle,
  titleMain,
  titleAccent,
  lead,
  backgroundImage,
  where,
  entrance,
  pastLabel,
}: HeroBillboardProps) => {
  const date = event ? formatEventDate(event.start) : '';
  const isoDate = event ? toIsoDate(event.start) : null;
  const registrationUrl = event?.url ?? LINKS.networkly;

  // Время начала показываем московское — сообщество собирается в Москве
  const time = event?.start
    ? new Intl.DateTimeFormat('ru-RU', {
        timeZone: 'Europe/Moscow',
        hour: '2-digit',
        minute: '2-digit',
      }).format(new Date(event.start))
    : '';

  const when = date && time ? `${date}, ${time}` : 'дату объявим в сообществе';

  return (
    <section className="hero">
      <div className="hero__backdrop" aria-hidden="true">
        <img src={withBase(backgroundImage)} alt="" loading="eager" fetchPriority="high" />
      </div>

      <div className="hero__inner">
        <p className="hero__overtitle">{overtitle}</p>

        <h1 className="hero__title">
          <span>{titleMain}</span>
          <span className="hero__title-accent">{titleAccent}</span>
        </h1>

        <p className="hero__lead">{lead}</p>

        <div className="hero__bill">
          <p className="hero__num" aria-hidden="true">
            {event?.num || '#12'}
          </p>

          <dl className="hero__rows">
            <div className="hero__row">
              <dt className="hero__term">Когда</dt>
              <dd className="hero__value">
                {isoDate ? <time dateTime={isoDate}>{when}</time> : when}
              </dd>
            </div>
            <div className="hero__row">
              <dt className="hero__term">Где</dt>
              <dd className="hero__value">{where}</dd>
            </div>
            <div className="hero__row">
              <dt className="hero__term">Вход</dt>
              <dd className="hero__value">{entrance}</dd>
            </div>
          </dl>
        </div>

        <div className="hero__actions">
          <a className="hero__cta" href={registrationUrl} {...EXTERNAL_LINK_ATTRS}>
            {event ? `Зарегистрироваться на ${event.num || 'дринкап'}` : 'Следить за анонсами'}
          </a>
          <a className="hero__link" href={withBase('/events')}>
            {pastLabel}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroBillboard;
