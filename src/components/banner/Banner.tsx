// src/components/Banner.tsx
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const images = [
    "https://images.dusdusan.com/product/xN816nLn1727164465_1727164333802.jpg",
    "https://images.dusdusan.com/product/mZD1k6gI1727163911_1727163779724.jpg",
    "https://images.dusdusan.com/product/EUyh0aWx1727164099_1727163967607.jpg",
    "https://images.dusdusan.com/product/m96M1XBM1727164242_1727164110861.jpg",
    "https://images.dusdusan.com/product/3ZjvsL2R1727164147_1727164015499.jpg",
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]} // Include Autoplay in modules
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <a className="banner">
            <img src={src} alt={`banner-${index}`} className="image" />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
