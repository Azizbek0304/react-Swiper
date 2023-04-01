import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './works.css';

// import required modules
import { Autoplay } from 'swiper';

function Svayper() {
  const datas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <Swiper
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper swiper-h !h-48"
      >
        {datas.map((data, index) => (
          <SwiperSlide className="rounded-[30px] " key={index}>
            Slide {data}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Svayper;
