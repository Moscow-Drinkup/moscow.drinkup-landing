import {EXTERNAL_LINK_ATTRS} from '@/shared/config';
import {participantReviews, partnerReviews, venueReviews} from '@/shared/content';
import type {Review} from '@/shared/content';
import './reviews.css';

/** Наборы отзывов доступны из JSON по имени, а не копированием текстов. */
const SETS: Record<string, Review[]> = {
  venues: venueReviews,
  partners: partnerReviews,
  participants: participantReviews,
};

export interface ReviewsBlockProps {
  title: string;
  /** Какой набор показать: venues, partners или participants. */
  set: keyof typeof SETS | string;
  anchor: string;
}

export const ReviewsBlock = ({title, set, anchor}: ReviewsBlockProps) => {
  const reviews = SETS[set] ?? [];

  return (
    <section className="reviews" id={anchor} aria-labelledby={`${anchor}-title`}>
      <h2 className="reviews__title" id={`${anchor}-title`}>
        {title}
      </h2>

      <ul className="reviews__list">
        {reviews.map((review) => (
          <li className="reviews__card" key={review.author + review.authorDescription}>
            <img className="reviews__photo" src={review.photo} alt="" loading="lazy" />

            <div className="reviews__body">
              {review.logo && (
                <img
                  className="reviews__logo"
                  src={review.logo}
                  alt=""
                  height="34"
                  loading="lazy"
                />
              )}

              <blockquote className="reviews__text">«{review.text}»</blockquote>

              <footer className="reviews__author">
                {review.authorUrl ? (
                  <a className="reviews__name" href={review.authorUrl} {...EXTERNAL_LINK_ATTRS}>
                    {review.author}
                  </a>
                ) : (
                  <span className="reviews__name">{review.author}</span>
                )}
                <span className="reviews__description">{review.authorDescription}</span>
              </footer>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ReviewsBlock;
