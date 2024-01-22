import { words } from "./../../helpers/wordsList";
import "./style.css";
import WordComponent from "../../components/word/Word";
import { useState } from "react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState(""); // состояние для хранения поискового запроса

  const filteredWords = words.filter((word) => {
    return word.title.toLowerCase().includes(searchTerm.toLowerCase()); // фильтрация списка слов
  });

  return (
    <main>
      <section className="dictionary">
        <div className="dictionary__container">
          <h2 className="dictionary__title">Словарь</h2>
          <input
            placeholder="Найти слово..."
            type="text"
            className="dictionary__input"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <ul className="dictionary__list">
            <li className="dictionary__item">
              {filteredWords.map((word, index) => {
                return (
                  <WordComponent
                    className="dictionary__item"
                    key={word.id}
                    title={word.title}
                    index={word.id}
                  />
                );
              })}
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;
