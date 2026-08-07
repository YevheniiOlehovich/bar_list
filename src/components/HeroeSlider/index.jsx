import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const images = [
  "/hero/1.jpg",
  "/hero/2.jpg",
  "/hero/3.jpg",
  "/hero/4.jpg",
  "/hero/5.jpg",
];

export default function HeroeSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      loop
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
        borderRadius: "24px",
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}