import { words } from "./../../helpers/wordsList";
import "./style.css";
import WordComponent from "../../components/word/Word";
const Home = () => {
  return (
    <main>
      <section className="dictionary">
        <div className="dictionary__container">
          <h2 className="dictionary__title">Словарь</h2>
          <input
            placeholder="В разработке..."
            type="text"
            className="dictionary__input"
            onChange={(event) => console.log(event.target.value)}
          />
          <ul className="dictionary__list">
            <li className="dictionary__item">
              {words.map((word, index) => {
                return (
                  <WordComponent
                    className="dictionary__item"
                    key={index}
                    title={word.title}
                    index={index}
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
