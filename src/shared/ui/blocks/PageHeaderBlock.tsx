import {withBase} from '@/shared/lib';

import './page-header.css';

export interface PageHeaderBlockProps {
  overtitle?: string;
  title: string;
  description?: string;
  cta?: {href: string; label: string; external?: boolean};
}

/** Заголовок раздела: надзаголовок, h1 и описание. */
export const PageHeaderBlock = ({overtitle, title, description, cta}: PageHeaderBlockProps) => (
  <section className="page-header">
    <header className="page-header__inner">
      {overtitle && <p className="page-header__overtitle">{overtitle}</p>}
      <h1 className="page-header__title">{title}</h1>
      {description && <p className="page-header__description">{description}</p>}
      {cta && (
        <a
          className="page-header__cta"
          href={cta.external ? cta.href : withBase(cta.href)}
          {...(cta.external ? {target: '_blank', rel: 'noopener noreferrer'} : {})}
        >
          {cta.label}
        </a>
      )}
    </header>
  </section>
);

export default PageHeaderBlock;
