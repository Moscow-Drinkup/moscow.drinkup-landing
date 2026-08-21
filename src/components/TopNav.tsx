import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';

const NAV_LINKS = [
  {to: '/', label: 'Главная'},
  {to: '/events', label: 'Мероприятия'},
  {to: '/venues', label: 'Площадкам'},
  {to: '/partners', label: 'Партнёрам'},
];

export const TopNav = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <nav className="drinkup-nav">
        <div className="drinkup-nav-inner">
          <NavLink to="/" className="drinkup-nav-logo" onClick={close}>
            <img src="img/logo.png" alt="Moscow DrinkUp" width="36" height="36" />
            <span>Moscow DrinkUp</span>
          </NavLink>
          <div className="drinkup-nav-links">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} className="drinkup-nav-link">
                {l.label}
              </NavLink>
            ))}
          </div>
          <button
            type="button"
            className={`drinkup-nav-burger${open ? ' drinkup-nav-burger--open' : ''}`}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div className={`drinkup-nav-overlay${open ? ' drinkup-nav-overlay--open' : ''}`} aria-hidden={!open}>
        <div className="drinkup-nav-overlay-inner">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className="drinkup-nav-overlay-link" onClick={close}>
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};
