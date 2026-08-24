import {withBase} from '@/shared/lib';

import './info-split.css';

interface InfoLink {
  href: string;
  label: string;
}

export interface InfoSplitBlockProps {
  anchor: string;
  title: string;
  text: string;
  points?: {title: string; text: string}[];
  links?: InfoLink[];
  aside: {title: string; text: string; links?: InfoLink[]};
}

/** Двухколоночная секция: основной рассказ слева, врезка справа. */
export const InfoSplitBlock = ({
  anchor,
  title,
  text,
  points = [],
  links = [],
  aside,
}: InfoSplitBlockProps) => (
  <section className="split" id={anchor} aria-labelledby={`${anchor}-title`}>
    <div className="split__main">
      <h2 className="split__title" id={`${anchor}-title`}>
        {title}
      </h2>
      <p className="split__text">{text}</p>

      {points.length > 0 && (
        <ul className="split__points">
          {points.map((point) => (
            <li className="split__point" key={point.title}>
              <p className="split__point-title">{point.title}</p>
              <p className="split__point-text">{point.text}</p>
            </li>
          ))}
        </ul>
      )}

      {links.length > 0 && (
        <p className="split__links">
          {links.map((link) => (
            <a className="split__link" href={withBase(link.href)} key={link.href}>
              {link.label}
            </a>
          ))}
        </p>
      )}
    </div>

    <aside className="split__aside">
      <h3 className="split__aside-title">{aside.title}</h3>
      <p className="split__aside-text">{aside.text}</p>
      {aside.links?.map((link) => (
        <a className="split__link" href={withBase(link.href)} key={link.href}>
          {link.label}
        </a>
      ))}
    </aside>
  </section>
);

export default InfoSplitBlock;
