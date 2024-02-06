import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./style.css";
const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__list">
          <li className="footer__item">Навигация</li>
          <NavLink to="/" className="footer__item">
            <p>Главная</p>
          </NavLink>
          <NavLink to="/aboutUs" className="footer__item">
            <p>О нас</p>
          </NavLink>
        </ul>
        <ul className="footer__contacts">
          <li className="footer__item">Контакты</li>
          <li className="footer__contacts-item">
            <a
              href="https://t.me/Timurka2077"
              className="footer__contacts-link"
              target="_blank"
              rel="noreferrer"
            >
              @Timurka2077
            </a>
          </li>
          <li className="footer__contacts-item">
            <a
              href="https://t.me/provodii"
              target="_blank"
              rel="noreferrer"
              className="footer__contacts-link"
            >
              @provodii
            </a>
          </li>
          <li className="footer__contacts-item">
            <a
              href="https://t.me/dne02i1"
              target="_blank"
              rel="noreferrer"
              className="footer__contacts-link"
            >
              @dne02i1
            </a>
          </li>
        </ul>
        <ul className="footer__contacts">
          <li className="footer__item">Предложить слово:</li>
          <li className="footer__contacts-item addWord">
            <a
              href="https://t.me/Timurka2077"
              className="footer__contacts-link"
              target="_blank"
              rel="noreferrer"
            >
              @Timurka2077
            </a>
          </li>
        </ul>
      </div>
      <p className="footer__copyright">© «ООО Сленгопедия», 2024</p>
    </footer>
  );
};

export default Footer;
