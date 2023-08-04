import React, { memo, useEffect, useState } from "react";
import { Randombennerdiv } from "../assets/css/MusicSub";
import { useDispatch, useSelector } from "react-redux"; // useSelector 추가
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { kordata, randomset } from "../store/modules/kordataAxios";
import Randomitem from "./Randomitem";
import "swiper/css/pagination";
import "swiper/css/navigation";

const KorRandombenner = memo(() => {
  const dispatch = useDispatch();
  const randomdata = useSelector((state) => state.kordata.randomdata);
  const loading = useSelector((state) => state.kordata.loading);
  useEffect(() => {
    setTimeout(() => {
      dispatch(randomset());
    }, 150);
  }, [dispatch,loading]);

  const getInitialSize = () => {
    return window.innerWidth <= 1400 ? 2 : 3;
  };

  const [wsize, setwsize] = useState(getInitialSize());

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1200) {
        setwsize(3);
      } else {
        setwsize(2);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [wsize]);

  if (loading) {
    return <h2>불러오는중</h2>;
  }
  return (
    <Randombennerdiv>
      <h2>오늘의 추천 한국음악</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={wsize===3?5:3}
        loop={true}
        className="mySwiper"
      >
        {randomdata.map((i, j) => (
          <SwiperSlide key={j}>
            <Randomitem i={i} listname={`kor`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Randombennerdiv>
  );
});

export default KorRandombenner;
