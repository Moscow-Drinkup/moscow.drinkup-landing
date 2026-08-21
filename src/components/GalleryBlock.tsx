import {useCallback, useState} from 'react';
import {Button, Modal} from '@gravity-ui/uikit';
import {Link} from 'react-router-dom';
import './gallery.css';

export type GalleryImage = {src: string; alt?: string};

export type GalleryBlockProps = {
  images: GalleryImage[];
};

const GalleryBlock = ({images}: GalleryBlockProps) => {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length],
  );

  return (
    <div className="drinkup-gallery">
      {images.map((img, i) => (
        <button
          key={img.src}
          type="button"
          className="drinkup-gallery-item"
          onClick={() => setIndex(i)}
          aria-label={img.alt || 'Фото с дринкапа'}
        >
          <img className="drinkup-gallery-img" src={img.src} alt={img.alt || ''} loading="lazy" />
        </button>
      ))}

      <Link className="drinkup-gallery-more" to="/events">
        Фотоотчёты с дринкапов — на страницах мероприятий →
      </Link>

      <Modal open={index !== null} onClose={close} contentClassName="drinkup-lightbox">
        {index !== null && (
          <>
            <img className="drinkup-lightbox-img" src={images[index].src} alt={images[index].alt || ''} />
            <div className="drinkup-lightbox-nav">
              <Button view="outlined" size="xl" onClick={prev} aria-label="Предыдущее фото">
                ←
              </Button>
              <span className="drinkup-lightbox-counter">
                {index + 1} / {images.length}
              </span>
              <Button view="outlined" size="xl" onClick={next} aria-label="Следующее фото">
                →
              </Button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default GalleryBlock;
