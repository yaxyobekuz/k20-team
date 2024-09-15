import React from "react";
import { Outlet } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// swiper
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";

// components
import Header from "../components/Header";

// data
import layoutSwiperSlides from "../data/layoutSwiperSlides";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-between relative z-10 site-overlay min-h-screen">
        {/* header */}
        <Header />

        {/* main */}
        <main className="pt-20 pb-40">
          <Outlet />
        </main>
      </div>

      {/* background */}
      <Swiper
        effect="fade"
        autoplay={{ delay: 5000 }}
        modules={[EffectFade, Autoplay]}
        className="main-swiper fixed inset-0 z-0 size-full"
      >
        {layoutSwiperSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.image}
              className="size-full object-cover bg-gray-500"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainLayout;
