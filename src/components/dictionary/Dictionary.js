import { words } from "./../../helpers/wordsList";
import "./style.css";
import { NavLink } from "react-router-dom";
import WordComponent from "../../components/word/Word";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState(""); // состояние для хранения поискового запроса

  const filteredWords = words.filter((word) => {
    return word.title.toLowerCase().includes(searchTerm.toLowerCase()); // фильтрация списка слов
  });

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <main>
      <section className="dictionary">
        <div className="dictionary__container">
          <div className="dictionary__title title">Словарь</div>
          <input
            placeholder="Найти слово..."
            type="text"
            data-aos="fade-right"
            className="dictionary__input"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <ul className="dictionary__list">
            {filteredWords.length === 0 ? (
              <p className="dictionary__error">Слово не найдено!</p>
            ) : (
              filteredWords.map((word, id) => {
                return (
                  <li className="dictionary__item">
                    <NavLink to={`/word/${word.id}`}>
                      <WordComponent
                        key={id}
                        title={word.title}
                        index={word.id}
                      />
                    </NavLink>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Dictionary;
