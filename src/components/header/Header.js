import { NavLink } from "react-router-dom";

import "./style.css";
import logo from "./../../img/icons/logoW.svg";
const Header = () => {
  const activeLink = "header__link currentPage";
  const normalLink = "header__link";

  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="header__logo">
          <div className="header__logo-img">
            <img src={logo} alt="logo" />
          </div>
          <p className="header__logo-name">Сленгопедия</p>
        </NavLink>

        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <p>Главная</p>
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                to="/aboutUs"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <p>О нас</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    // <header className="header">
    //   <div className="header__container">
    //     <NavLink to="/" className="logo">
    //       <img src={logo} alt="logo" />
    //     </NavLink>
    //     <nav className="header__nav">
    //       <ul className="header__list">
    //         <li
    //           className={({ isActive }) => (isActive ? activeLink : normalLink)}
    //         >
    //           <NavLink to="/" className="header__link">
    //             <p>Главная</p>
    //           </NavLink>
    //         </li>
    //         <li
    //           className={({ isActive }) => (isActive ? activeLink : normalLink)}
    //         >
    //           <NavLink to="/aboutUs" className="header__link">
    //             <p>О нас</p>
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </header>
  );
};

export default Header;
