import React from 'react';
import Svayper from '../Works/swiper';

function Works() {
  const datas = [
    'https://www.dotsoft.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fidealcleaning.f150a8b4.jpg&w=640&q=75',
    'https://www.dotsoft.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffayzbaraka.4b28ceb6.jpg&w=640&q=75',
    'https://www.dotsoft.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Findebt-1.4e4a01c7.jpg&w=640&q=75',
    'https://www.dotsoft.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimbastudio.f88889bf.jpg&w=1200&q=75',
    'https://www.dotsoft.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Findebt.a68271f0.jpg&w=1200&q=75',
    'https://www.dotsoft.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsuvtaminoti.e6d0c4ba.jpg&w=1200&q=75',
    'https://www.dotsoft.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finreport.7f9ad8ab.jpg&w=1200&q=75',
    'https://www.dotsoft.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flazydev.99b90e27.jpg&w=1200&q=75',
    'https://www.dotsoft.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmamirovgroup.f46234cc.jpg&w=1200&q=75',
  ];
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
        <Svayper datas={datas} />
      </div>
    </section>
  );
}

export default Works;
