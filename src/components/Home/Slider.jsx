import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import img1 from '../../assets/slider/istockphoto-903052748-1024x1024.jpg';
import img2 from '../../assets/slider/pexels-photo-1077450.jpeg';
import img3 from '../../assets/slider/pexels-photo-2134326.jpeg';
import img4 from '../../assets/slider/pexels-photo-2411747.jpeg';
import img5 from '../../assets/slider/pexels-photo-4257246.jpeg';
import img6 from '../../assets/slider/pexels-photo-4618223.jpeg';

const Slider = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide><img src={img1} alt="" className='my-7 w-full h-[400px] md:h-[500px] lg:h-[580px]' /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="" className='my-7 w-full h-[400px] md:h-[500px] lg:h-[580px]' /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" className='my-7 w-full h-[400px] md:h-[500px] lg:h-[580px]' /></SwiperSlide>
            <SwiperSlide><img src={img4} alt="" className='my-7 w-full h-[400px] md:h-[500px] lg:h-[580px]' /></SwiperSlide>
            <SwiperSlide><img src={img5} alt="" className='my-7 w-full h-[400px] md:h-[500px] lg:h-[580px]' /></SwiperSlide>
            <SwiperSlide><img src={img6} alt="" className='my-7 w-full h-[400px] md:h-[500px] lg:h-[580px]' /></SwiperSlide> 
      </Swiper>
    );
};

export default Slider;