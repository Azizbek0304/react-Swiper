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
        className="mySwiper swiper-h "
      >
        {datas.map((data, index) => (
          <SwiperSlide className="rounded-[30px] !h-60" key={index}>
            {data}
            <div className="cardSwiper">
              <div className="slide-opacity">
                <h4>Development</h4>
                <div className={`slide-opacity-box bg-[url(${data})]`}>
                  <div className="w-8 h-8">
                    <span>
                      <img
                        src="data:image/png;base64,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"
                        alt=""
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: 'absolute',
                          inset: '0px',
                          boxSizing: 'border-box',
                          padding: '0px',
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: '0px',
                          height: '0px',
                          minWidth: '100%',
                          maxWidth: ' 100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                        }}
                      />
                      <noscript></noscript>
                    </span>
                    <p>{data}</p>
                    <a
                      target="_blank"
                      className="p-5 hover:scale-95 duration-500 bg-[white] rounded-full absolute right-[15px] top-0 transform translate-y-[-50%]"
                      href="#"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Svayper;
