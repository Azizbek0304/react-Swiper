import React from 'react';
import Svayper from '../Works/swiper';

function Works() {
  return (
    <section className="container mx-auto py-10 md:py-14 lg:py-16 xl:py-20 !px-[5rem] ">
      <div
        id="portfolio"
        className="flex flex-wrap justify-between items-center"
      >
        <div>
          <h3 className="font-bold md:text-xl">Works</h3>
          <h1 className="md:text-[4rem] text-[2rem] font-bold leading-none">
            {'DotSoft - '}
            <span className="text-[#006b98]">things done.</span>
          </h1>
          <br className="md:block-hidden" />
        </div>
      </div>
      <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events my-swiper">
        <Svayper />
      </div>
    </section>
  );
}

export default Works;
