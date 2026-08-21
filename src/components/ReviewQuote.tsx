import './review-quote.css';

export type ReviewAuthor = {
  firstName?: string;
  description?: string;
  url?: string;
};

export type ReviewQuoteProps = {
  text?: string;
  logo?: string;
  image?: string;
  author?: ReviewAuthor;
  theme?: string;
};

/**
 * Кастомный саб-блок отзыва: фото сверху, логотип, текст и кликабельный автор.
 * Используется в CardLayoutBlock вместо стандартного Quote (там автор не ссылка).
 */
export const ReviewQuote = ({text, logo, image, author}: ReviewQuoteProps) => {
  return (
    <div className="drinkup-review">
      {image && <img className="drinkup-review-photo" src={image} alt="" />}
      {logo && <img className="drinkup-review-logo" src={logo} alt="" />}
      {text && <div className="drinkup-review-text">{text}</div>}
      {author && (
        <div className="drinkup-review-author">
          {author.url ? (
            <a
              className="drinkup-review-name"
              href={author.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {author.firstName}
            </a>
          ) : (
            <span className="drinkup-review-name">{author.firstName}</span>
          )}
          {author.description && <div className="drinkup-review-desc">{author.description}</div>}
        </div>
      )}
    </div>
  );
};

export default ReviewQuote;
