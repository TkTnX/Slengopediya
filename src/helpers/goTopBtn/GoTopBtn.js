import "./style.css";
import arrow from "./arrow.svg";

const GoTopBtn = () => {
  const topBtn = () => {
    window.scrollTo(0, 0);
  };
  const handleScroll = () => {
    const arrowBtn = document.getElementById("arrowUpBtn");

    if (arrowBtn) {
      const offset = window.pageYOffset;
      const coords = document.documentElement.clientHeight;

      if (offset > coords) {
        arrowBtn.className = "arrow-up go-top--show";
      } else {
        arrowBtn.className = "arrow-up";
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <button>
        <img
          onClick={topBtn}
          id="arrowUpBtn"
          className="arrow-up"
          src={arrow}
          alt="Подняться вверх"
        />
      </button>
    </>
  );
};

export default GoTopBtn;
