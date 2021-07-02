import React from 'react';
import {DataFeedback} from './datafeedback';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination, Autoplay} from 'swiper';
import 'swiper/swiper.scss';
import SliderComponent from './sliderComponent';
SwiperCore.use([Pagination, Autoplay]);
const SliderFeedback = () =>{
    const Container = DataFeedback.map((items , i) =>{
        return (
        <SwiperSlide key={i}>
            <SliderComponent 
            key={i}
            content={items.content} 
            name={items.name} 
            position={items.position} 
            company={items.company}
            />
        </SwiperSlide>
        )
    });
    return(
        <div className='container-feedback'>
            <div data-aos='zoom-in' data-aos-duration='1000' data-aos-offset='200' data-aos-delay='800' className='box-feedback'>
                <p className='title-feedback-customer'>Happy customer</p>
                <div className='line-below'></div>
                <Swiper
                autoplay={{delay: 4000}}
                pagination={{ clickable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                    {Container}
                </Swiper>
            </div>
        </div>
    )
}

export default SliderFeedback;