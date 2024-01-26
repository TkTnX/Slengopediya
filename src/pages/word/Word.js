import { NavLink, useParams } from "react-router-dom";
import { words } from "./../../helpers/wordsList";
import "./style.css";

const Word = () => {
  const { index } = useParams();
  const word = words.find((word) => word.id === index);



  return (
    <main>
      <section className="slovo">
        <div className="slovo__container">
          <h2 className="slovo__title">{word.title}</h2>

          <p className="slovo__desc">
            {word.title} - {word.desc}
          </p>
          <p className="slovo__example">Пример: {word.example}</p>
          <NavLink to="/" className="slovo__btn">
            <p>Вернуться на главную</p>
          </NavLink>
        </div>
      </section>
    </main>
  );
};

export default Word;
