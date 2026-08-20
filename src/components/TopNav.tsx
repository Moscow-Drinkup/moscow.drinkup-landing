import {NavLink} from 'react-router-dom';
import './nav.css';

const NAV_LINKS = [
  {to: '/', label: 'Главная'},
  {to: '/events', label: 'Мероприятия'},
  {to: '/venues', label: 'Площадкам'},
  {to: '/partners', label: 'Партнёрам'},
];

export const TopNav = () => {
  return (
    <nav className="drinkup-nav">
      <div className="drinkup-nav-inner">
        <NavLink to="/" className="drinkup-nav-logo">
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
      </div>
    </nav>
  );
};
