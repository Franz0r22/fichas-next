'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';

const slider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide>
          <Image 
            src="/images/slides/slide_1.webp"
            width={1920}
            height={500}
            alt="Picture of the author"
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
              src="/images/slides/slide_2.webp"
              width={1920}
              height={500}
              alt="Picture of the author"
            />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default slider

