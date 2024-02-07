import { words } from "./../../helpers/wordsList";
import { NavLink, useParams } from "react-router-dom";

import "./style.css";

const Word = () => {
  const { index } = useParams();

  for (let i = 0; i < words.length; i++) {
    if (words[i].id === index) {
      localStorage.setItem("title", words[i].title);
      localStorage.setItem("desc", words[i].desc);
      localStorage.setItem("example", words[i].example);
      break;
    }
  }

  return (
    <main>
      <section className="slovo">
        <div className="slovo__container">
          <h2 className="slovo__title">{localStorage.getItem("title")}</h2>

          <p className="slovo__desc">
            {localStorage.getItem("title")}-{localStorage.getItem("desc")}
          </p>
          <p className="slovo__example">
            Пример: {localStorage.getItem("example")}
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
