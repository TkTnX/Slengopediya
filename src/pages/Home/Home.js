import { NavLink } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <main>
      <section className="dictionary">
        <div className="dictionary__container">
          <h2 className="dictionary__title">Словарь</h2>
          <input
            placeholder="Найти слово..."
            type="text"
            className="dictionary__input"
          />
          <ul className="dictionary__list">
            <li className="dictionary__item">
              <NavLink className="dictionary__item" to="./word">
                <p>Вайб</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;
