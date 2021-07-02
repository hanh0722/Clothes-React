import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import ContainerComponent from "./sliderComponent";
import Slider1 from "../img/slider1.jpg";
import Slider2 from "../img/slider2.jpg";
import Slider3 from "../img/slider3.jpg";
SwiperCore.use([Pagination, Autoplay]);
const SwiperContainer = () => {
  const img = [Slider1, Slider2, Slider3];
  const gender = ["male", "female", "accessories"];
  const SwiperContainer = img.map((items, index) => {
    return (
      <SwiperSlide key={index}>
        <ContainerComponent Slider={items} path={gender[index]} content={gender[index]}/>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      onSlideChange={() => {}}
      onSwiper={() => {}}
    >
      {SwiperContainer}
    </Swiper>
  );
};

export default SwiperContainer;
