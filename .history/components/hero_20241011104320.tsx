"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Autoplay } from 'swiper';

import "swiper/css";
import "swipper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  const swiper = useSwiper();
  return (
    <section className="py-4">
      <div className="container max-w-[1240px] mx-auto px-7 text-center">
        <Swiper
          navigation
          pagination={{ type: "fraction" }}
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          className="bg-[blue] h-96 w-full rounded-lg"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <button onClick={() => swiper.slideNext()}>next Slide</button>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
