import {withBase} from '@/shared/lib';

import './fact-list.css';
import './tabs.css';

interface Fact {
  title: string;
  text: string;
}

interface TabPanel {
  id: string;
  label: string;
  title: string;
  text: string;
  facts: Fact[];
  summary?: string;
  cta?: {href: string; label: string};
}

export interface TabsBlockProps {
  /** Идентификатор набора вкладок: нужен, если их на странице несколько. */
  name: string;
  items: TabPanel[];
}

/**
 * Вкладки с фактами. Разметка следует рекомендациям ARIA Authoring Practices,
 * переключение живёт в инлайновом скрипте каркаса — фреймворк для этого не нужен.
 * До загрузки скрипта видна первая панель, остальные остаются в разметке.
 */
export const TabsBlock = ({name, items}: TabsBlockProps) => (
  <div className="tabs" data-tabs>
    <div className="tabs__list" role="tablist" aria-label="Разделы">
      {items.map((item, index) => (
        <button
          key={item.id}
          type="button"
          className="tabs__tab"
          role="tab"
          id={`${name}-tab-${item.id}`}
          aria-controls={`${name}-panel-${item.id}`}
          aria-selected={index === 0}
          tabIndex={index === 0 ? 0 : -1}
        >
          {item.label}
        </button>
      ))}
    </div>

    {items.map((item, index) => (
      <div
        key={item.id}
        className="tabs__panel"
        role="tabpanel"
        id={`${name}-panel-${item.id}`}
        aria-labelledby={`${name}-tab-${item.id}`}
        tabIndex={0}
        {...(index === 0 ? {} : {'data-inactive': ''})}
      >
        <div className="facts">
          <h3 className="facts__title">{item.title}</h3>
          <p className="facts__text">{item.text}</p>

          <ul className="facts__list">
            {item.facts.map((fact) => (
              <li className="facts__item" key={fact.title}>
                <p className="facts__item-title">{fact.title}</p>
                <p className="facts__item-text">{fact.text}</p>
              </li>
            ))}
          </ul>

          {item.summary && <p className="facts__summary">{item.summary}</p>}
          {item.cta && (
            <a className="facts__cta" href={withBase(item.cta.href)}>
              {item.cta.label}
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default TabsBlock;
