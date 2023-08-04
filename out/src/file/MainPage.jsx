import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Homecontent } from "../assets/css/MusicSub";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

import { EffectFade, Navigation, Pagination } from "swiper/modules";

const MainPage = () => {
  return (
    <>
      <Homecontent>
        <header id="header">
          <ul>
            <li>홈</li>
            <li>보관함</li>
            <li>음악차트</li>
          </ul>
        </header>
        <main id="main">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            modules={[EffectFade, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <video src="../public/images/main_2.mp4"></video>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
          </Swiper>
        </main>
      </Homecontent>
    </>
  );
};

export default MainPage;
