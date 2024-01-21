import { NavLink } from "react-router-dom";

import "./style.css";
import logo from "./../../img/icons/logo.png";
const Header = () => {
  const activeLink = "header__item active";
  const normalLink = "header__item";

  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="logo">
          <img src={logo} alt="logo" />
        </NavLink>
        <nav className="header__nav">
          <ul className="header__list">
            <li
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <NavLink to="/" className="header__link">
                <p>Главная</p>
              </NavLink>
            </li>
            <li
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <NavLink to="/aboutUs" className="header__link">
                <p>О нас</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
