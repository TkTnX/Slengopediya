import { NavLink } from "react-router-dom";
import "./style.css";

const Word = () => {
  return (
    <main>
      <section className="slovo">
        <div className="slovo__container">
          <h2 className="slovo__title">Вайб</h2>
          <p className="slovo__desc">
            Вайб - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati modi autem debitis unde, amet sed!
          </p>
          <NavLink to="/" className="slovo__btn">
            <p>Вернуться на главную</p>
          </NavLink>
        </div>
      </section>
    </main>
  );
};

export default Word;
