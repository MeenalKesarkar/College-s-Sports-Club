import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/sports', label: 'Sports' },
  { to: '/login', label: 'Login' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu automatically whenever the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="logo" aria-label="Sports Club — Home">
          SPORTS CLUB
        </NavLink>

        <button
          type="button"
          className="menu-toggle"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span className={`menu-toggle__bar ${isMenuOpen ? 'is-open' : ''}`} />
          <span className={`menu-toggle__bar ${isMenuOpen ? 'is-open' : ''}`} />
          <span className={`menu-toggle__bar ${isMenuOpen ? 'is-open' : ''}`} />
        </button>

        <nav
          id="primary-navigation"
          className={`navbar ${isMenuOpen ? 'navbar--open' : ''}`}
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
              end={to === '/'}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;