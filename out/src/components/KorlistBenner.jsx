import React, { memo, useEffect, useState } from "react";
import { MusicListBennerdiv } from "../assets/css/MusicSub";
import { useDispatch, useSelector } from "react-redux";
import { kordata, useswiper } from "../store/modules/kordataAxios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Benneritem from "./Benneritem";
import { NavLink } from "react-router-dom";

const KorlistBenner = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(kordata());
      dispatch(useswiper(5));
    };
    fetchData();
  }, []);

  const swiperdata = useSelector((state) => state.kordata.korswiper);

  const getInitialSize = () => {
    return window.innerWidth <= 1400 ? 2 : 3;
  };

  const [wsize, setwsize] = useState(getInitialSize());

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1400) {
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
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1400) {
        setwsize(3);
      } else {
        setwsize(2);
      }
    };
    const handleFullscreenChange = () => {
      handleResize();
    };
    const handleFullscreenError = () => {
      console.log("스크린에러");
    };
    window.addEventListener("resize", handleResize);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("fullscreenerror", handleFullscreenError);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("fullscreenerror", handleFullscreenError);
    };
  }, [wsize]);

  const kordatalist = useSelector((state) => state.kordata.kodata);
  return (
    <MusicListBennerdiv>
      <h3 style={{ display: "flex", justifyContent: "space-between" }}>
        국내 HOT 100{" "}
        <NavLink to={`/chart/${`kor`}/${"text"}/${"nop"}`}>더보기...</NavLink>{" "}
      </h3>
      <ul>
        <Swiper spaceBetween={5} slidesPerView={wsize}>
          {swiperdata.map((i, j) => (
            <SwiperSlide key={j} style={{ width: 350 }}>
              {" "}
              <Benneritem key={j} i={i} listname={"kor"} />{" "}
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </MusicListBennerdiv>
  );
});

export default KorlistBenner;
