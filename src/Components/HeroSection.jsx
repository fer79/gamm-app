import React, { useRef, useState } from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
  export default function HeroSection() {
    return (
      <Swiper pagination={true} modules={[Pagination, Navigation]}
        navigation={{
          nextEl: '.next',
          prevEl: '.prev',
      }}>
        <SwiperSlide>
          <div className="container mx-auto px-6 flex relative py-16 text-bud-green">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative">
                  <h1 className="text-2xl sm:text-6xl">Lorem ipsum dolor sit amet</h1>
                  <p className="text-sm sm:text-base my-6">Nunc porttitor tortor metus, nec sagittis lectus accumsan quis. Aenean euismod mollis tempor.</p>
                  <div className="flex my-6">
                    <PrimaryButton value='Shop Now'></PrimaryButton>
                    <SecondaryButton value='Take the Quiz'></SecondaryButton>
                  </div>
                  <div className="flex my-6">
                    <div className="pr-2"><button className="py-2 px-4 rounded-full bg-transparent border-2 border-bud-green hover:bg-lime-300 hover:border-lime-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-3 sm:h-4 fill-current text-bud-green"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></button></div>
                    <div><button className="next py-2 px-4 rounded-full bg-bud-green border-2 border-bud-green  mr-4 hover:bg-lime-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-3 sm:h-4 fill-current text-white"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button></div>
                  </div>
            </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
              <img src="/img/product-1.png" className="m-auto"/>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container mx-auto px-6 flex relative py-16 text-bud-green">
              <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative">
                    <h1 className="text-2xl sm:text-6xl">Cras in leo mollis</h1>
                    <p className="text-sm sm:text-base my-6">Commodo velit quis, scelerisque nisi. Mauris non augue lorem.</p>
                    <div className="flex my-6">
                      <PrimaryButton value='Shop Now'></PrimaryButton>
                      <SecondaryButton value='Take the Quiz'></SecondaryButton>
                    </div>
                    <div className="flex my-6">
                      <button className="prev py-2 px-4 rounded-full bg-transparent border-2 border-bud-green hover:bg-lime-300 hover:border-lime-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-3 sm:h-4 fill-current text-bud-green"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></button>
                      <button className="next py-2 px-4 rounded-full bg-bud-green border-2 border-bud-green  mr-4 hover:bg-lime-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-3 sm:h-4 fill-current text-white"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
                    </div>
              </div>
              <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                <img src="/img/product-2.png" className="m-auto"/>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container mx-auto px-6 flex relative py-16 text-bud-green">
              <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative">
                    <h1 className="text-2xl sm:text-6xl">Quisque eget orci gravida</h1>
                    <p className="text-sm sm:text-base my-6">Donec imperdiet elementum accumsan. Donec hendrerit in erat eu pretium. Sed auctor rhoncus laoreet.</p>
                    <div className="flex my-6">
                      <PrimaryButton value='Shop Now'></PrimaryButton>
                      <SecondaryButton value='Take the Quiz'></SecondaryButton>
                    </div>
                    <div className="flex my-6">
                      <button className="prev py-2 px-4 rounded-full bg-transparent border-2 border-bud-green hover:bg-lime-300 hover:border-lime-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-3 sm:h-4 fill-current text-bud-green"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></button>
                      <button className="py-2 px-4 rounded-full bg-bud-green border-2 border-bud-green  mr-4 hover:bg-lime-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-3 sm:h-4 fill-current text-white"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
                    </div>
              </div>
              <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                <img src="/img/product-3.png" className="m-auto"/>
              </div>
            </div>
          </SwiperSlide>
      </Swiper>
    );
  }