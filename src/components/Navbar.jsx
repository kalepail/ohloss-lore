import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/">
          <span className="brand-icon">⛰︎ ོ ༄</span>
          <span className="brand-text">Ohloss</span>
        </NavLink>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/lore" className={({ isActive }) => isActive ? 'active' : ''}>
            Lore
          </NavLink>
        </li>
        <li>
          <NavLink to="/characters" className={({ isActive }) => isActive ? 'active' : ''}>
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink to="/factions" className={({ isActive }) => isActive ? 'active' : ''}>
            Factions
          </NavLink>
        </li>
        <li>
          <NavLink to="/guides" className={({ isActive }) => isActive ? 'active' : ''}>
            Guides
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
