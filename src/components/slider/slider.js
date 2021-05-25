import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination, Autoplay} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import ContainerComponent from './sliderComponent';
import Slider1 from '../img/slider1.jpg';
import Slider2 from '../img/slider2.jpg';
import Slider3 from '../img/slider3.jpg';
SwiperCore.use([Pagination, Autoplay]);
const SwiperContainer = () => {
    const img = [Slider1, Slider2, Slider3];
    const SwiperContainer = img.map((items, index) =>{
        return <ContainerComponent key={index} Slider={items}/>
    })
    
    return (
      <Swiper
        pagination={{clickable: true}}
        autoplay={{delay: 3000}}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
            {SwiperContainer[0]}
        </SwiperSlide>
        <SwiperSlide>
            {SwiperContainer[1]}
        </SwiperSlide>
        <SwiperSlide>
            {SwiperContainer[2]}
        </SwiperSlide>
      </Swiper>
    );
  };

export default SwiperContainer;