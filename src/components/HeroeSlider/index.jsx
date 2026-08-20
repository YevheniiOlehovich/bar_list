import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import SliderPic1 from "../../assets/slider/slide1.webp";
import SliderPic2 from "../../assets/slider/slide2.webp";
import SliderPic4 from "../../assets/slider/slide4.webp";
import SliderPic5 from "../../assets/slider/slide5.webp";

import "swiper/css";
import "swiper/css/pagination";

const images = [
  SliderPic1,
  SliderPic2,
  SliderPic4,
  SliderPic5,
];

export default function HeroeSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide
          key={index}
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* =========================
              РОЗМИТИЙ ФОН
          ========================== */}

          <img
            src={image}
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,

              width: "100%",
              height: "100%",

              objectFit: "cover",

              filter: "blur(25px)",
              transform: "scale(1.15)",

              opacity: 0.35,

              zIndex: 0,
            }}
          />

          {/* =========================
              ОСНОВНЕ ЗОБРАЖЕННЯ
          ========================== */}

          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              position: "relative",

              width: "100%",
              height: "100%",

              objectFit: "contain",

              zIndex: 1,

              display: "block",
            }}
          />

          {/* =========================
              ТЕМНИЙ ГРАДІЄНТ
          ========================== */}

          <div
            style={{
              position: "absolute",
              inset: 0,

              background:
                "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.12) 100%)",

              pointerEvents: "none",

              zIndex: 2,
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}