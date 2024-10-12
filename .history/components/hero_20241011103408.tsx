"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";

import "swiper/css";

const Hero = () => {
    const swiper = useSwiper();
  return (
    <section className="py-4">
      <div className="container max-w-[1240px] mx-auto px-7 text-center">
        <Swiper
         navigation
         pagination={{type: }}
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
