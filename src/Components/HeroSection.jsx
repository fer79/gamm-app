import HeroSlide from './HeroSlide';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function HeroSection() {
  return (
    <Swiper pagination={true} modules={[Pagination, Navigation]}
      navigation={{
        nextEl: '.nextHero',
        prevEl: '.prevHero',
    }}>
      <SwiperSlide>
        <HeroSlide
          title = 'Lorem ipsum dolor sit amet'
          phrase = 'Nunc porttitor tortor metus, nec sagittis lectus accumsan quis. Aenean euismod mollis tempor.'
          productImg = '/img/product-1.png'
        ></HeroSlide>
      </SwiperSlide>
      <SwiperSlide>
        <HeroSlide
          title = 'Cras in leo mollis'
          phrase = 'Commodo velit quis, scelerisque nisi. Mauris non augue lorem.'
          productImg = '/img/product-2.png'
        ></HeroSlide>
      </SwiperSlide>
      <SwiperSlide>
        <HeroSlide
          title = 'Quisque eget orci gravida'
          phrase = 'Donec imperdiet elementum accumsan. Donec hendrerit in erat eu pretium. Sed auctor rhoncus laoreet. Commodo velit quis, scelerisque nisi. Mauris non augue lorem.'
          productImg = '/img/product-3.png'
        ></HeroSlide>
      </SwiperSlide>
    </Swiper>
  );
}