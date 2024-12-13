import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Paragraph from '../common/Paragraph';
import Heading62 from '../common/Heading62';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


const Crouser = () => {
  return (
    <div className='mt-10'>    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    // pagination={{ clickable: true }}
    // scrollbar={{ draggable: false }}
    // onSlideChange={() => console.log('slide change')}
    // onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
    <div className='border mx-auto w-[80%] py-[56px]  '>
        <Paragraph text={'“Hangar Direct was the best. It was so easy to use on our trip to Colorado and using it made our lives so easy.”'} customClass={'!text-black !pt-0 !text-[18px] '}/>
            <Heading62 text={'John P'} customClass={'text-black !text-[24px] !pt-5'}/>
            
            </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='border mx-auto w-[80%] py-[56px]  '>
        <Paragraph text={'“Hangar Direct was the best. It was so easy to use on our trip to Colorado and using it made our lives so easy.”'} customClass={'!text-black !pt-0 !text-[18px] '}/>
            <Heading62 text={'John P'} customClass={'text-black !text-[24px] !pt-5'}/>
            
            </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='border mx-auto w-[80%] py-[56px]  '>
        <Paragraph text={'“Hangar Direct was the best. It was so easy to use on our trip to Colorado and using it made our lives so easy.”'} customClass={'!text-black !pt-0 !text-[18px]'}/>
            <Heading62 text={'John P'} customClass={'text-black !text-[24px] !pt-5'}/>
            
            </div>
    </SwiperSlide>


  </Swiper>
  </div>
  )
}

export default Crouser;