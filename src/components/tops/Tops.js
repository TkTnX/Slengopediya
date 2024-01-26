import Slider from "../../helpers/slider/Slider";

const Tops = () => {
  return (
    <section className="hits">
      <div className="hits__container">
        <h2 className="hits__title title">Популярные слова</h2>
        <div className="hits__slider">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Tops;
