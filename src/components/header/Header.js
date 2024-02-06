import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./style.css";
import logo from "./../../img/icons/logoW.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const activeLink = "header__link currentPage";
  const normalLink = "header__link";

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <header className="header" data-aos="fade-down">
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
  );
};

export default Header;
