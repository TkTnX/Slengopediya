import { NavLink } from "react-router-dom";

import "./style.css";
import logo from "./../../img/icons/logo.png";
import tg from "./../../img/icons/telegram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <NavLink to="/" className="logo">
          <img src={logo} alt="logo" />
        </NavLink>

        <div className="footer__contacts">
          <a
            href="https://t.me/Timurka2077"
            target="_blank"
            rel="noreferrer"
            className="footer__contact"
          >
            <img src={tg} alt="telegram" />
            <p>@Timurka2077</p>
          </a>
          <a
            href="https://t.me/provodii"
            target="_blank"
            rel="noreferrer"
            className="footer__contact"
          >
            <img src={tg} alt="telegram" />
            <p>@provodii</p>
          </a>
          <a
            href="https://t.me/dne02i1"
            target="_blank"
            rel="noreferrer"
            className="footer__contact"
          >
            <img src={tg} alt="telegram" />
            <p>@dne02i1</p>
          </a>
        </div>
      </div>
      <p className="footer__copyright">© «ООО Сленгопедия», 2024</p>
    </footer>
  );
};

export default Footer;
