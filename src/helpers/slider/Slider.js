// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { popularWords } from "./popularWords";
// Import Swiper styles
import "swiper/css";
import "./style.css";
import "swiper/css/autoplay";

export default () => {
  return (
    <Swiper
      className="swiper-wrapper"
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        1210: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        830: {
          slidesPerView: 2,
        },
      }}
      loop={true}
      autoplay={{ delay: 3000 }}
      navigation
      pagination={{ clickable: true }}
    >
      {popularWords.map((popularWords) => {
        return (
          <SwiperSlide>
            <div className="hits__card">
              <div className="hits__card-title">{popularWords.title}</div>
              <div className="hits__card-desc">
                {popularWords.title} - {popularWords.desc}
              </div>
            </div>
          </SwiperSlide>
        );
      })}

      {/* <SwiperSlide>
        <div className="hits__card">
          <div className="hits__card-title">Чушпан</div>
          <div className="hits__card-desc">
            Чушпан - это кринж. Узнать что такое кринж, вы можете на нашем
            сайте.
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hits__card">
          <div className="hits__card-title">Чушпан</div>
          <div className="hits__card-desc">
            Чушпан - это кринж. Узнать что такое кринж, вы можете на нашем
            сайте.
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="hits__card">
          <div className="hits__card-title">Чушпан</div>
          <div className="hits__card-desc">
            Чушпан - это кринж. Узнать что такое кринж, вы можете на нашем
            сайте.
          </div>
        </div>
      </SwiperSlide> */}
    </Swiper>
  );
};
