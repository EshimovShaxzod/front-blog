"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { images } from "@/lib/images";

import "swiper/css";
import Image from "next/image";

const Hero = () => {
  const swiper = useSwiper();
  return (
    <section className="py-4">
      <div className="container max-w-[1240px] mx-auto px-7 text-center">
        
      </div>
    </section>
  );
};

export default Hero;
