import {withBase} from '@/shared/lib';
import './gallery.css';

export interface GalleryBlockProps {
  title: string;
  moreLabel: string;
  images: {src: string; alt: string}[];
}

/**
 * Фотографии с прошедших дринкапов.
 *
 * Компонент рисует только разметку: поведение лайтбокса живёт отдельным
 * инлайновым скриптом в каркасе страницы, поэтому React в браузер не уезжает.
 */
export const GalleryBlock = ({title, moreLabel, images}: GalleryBlockProps) => (
  <section className="gallery" aria-labelledby="gallery-title">
    <h2 className="gallery__title" id="gallery-title">
      {title}
    </h2>

    <ul className="gallery__grid">
      {images.map((image) => (
        <li key={image.src}>
          <button
            type="button"
            className="gallery__item"
            data-lightbox-open
            aria-label={`Открыть фото: ${image.alt}`}
          >
            <img src={withBase(image.src)} alt={image.alt} loading="lazy" />
          </button>
        </li>
      ))}
    </ul>

    <a className="gallery__more" href={withBase('/events')}>
      {moreLabel}
    </a>

    <dialog className="lightbox" data-lightbox aria-label="Просмотр фотографии">
      <img className="lightbox__image" data-lightbox-image src="" alt="" />
      <div className="lightbox__controls">
        <button
          type="button"
          className="lightbox__button"
          data-lightbox-prev
          aria-label="Предыдущее фото"
        >
          ←
        </button>
        <span className="lightbox__counter" data-lightbox-counter aria-live="polite"></span>
        <button
          type="button"
          className="lightbox__button"
          data-lightbox-next
          aria-label="Следующее фото"
        >
          →
        </button>
        <button type="button" className="lightbox__button" data-lightbox-close aria-label="Закрыть">
          ✕
        </button>
      </div>
    </dialog>
  </section>
);

export default GalleryBlock;
