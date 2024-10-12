"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import 

import "swiper/css";

const Hero = () => {
  return (
    <section className="py-4">
      <div className="container max-w-[1240px] mx-auto px-7 text-center h-[400px] bg-[red]">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="bg-[blue]"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
         <button>next Slide</button>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
