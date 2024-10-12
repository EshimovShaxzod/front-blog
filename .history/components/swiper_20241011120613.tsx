import React from 'react'

const Swiper = () => {
  return (
    <Swiper
          navigation
          pagination={{ type: "fraction" }}
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          loop={true}
          className="h-[500px] w-full rounded-lg"
        >
          {images.map((image) => (
            <SwiperSlide key={image.alt}>
              <Image
                src={image.src}
                alt="image"
                className="h-full w-full object-cover"
              />
            </SwiperSlide>
          ))}
          <button onClick={() => swiper.slideNext()}>next Slide</button>
        </Swiper>
  )
}

export default Swiper