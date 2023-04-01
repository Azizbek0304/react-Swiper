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
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper swiper-h !h-64"
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
