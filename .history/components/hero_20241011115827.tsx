"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { images } from '@/lib/images'

import "swiper/css";
import Image from "next/image";

const Hero = () => {
  const swiper = useSwiper();
  return (
    <section className="py-4">
      <div className="container max-w-[1240px] mx-auto px-7 text-center">
        <Swiper
          navigation
          pagination={{ type: "fraction" }}
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          loop={true}
          className="bg-[blue] h-[500px] w-full rounded-lg"
        >
          {images.map((image) => (
            <SwiperSlide `key={image}>
              <Image
                src={image}
                alt="image"
                className="h-full w-full object-cover"
              />
            </SwiperSlide>
          ))}
          <button onClick={() => swiper.slideNext()}>next Slide</button>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
