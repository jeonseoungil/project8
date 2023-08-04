import React, { memo, useEffect, useState } from "react";
import { Randombennerdiv } from "../assets/css/MusicSub";
import { useDispatch, useSelector } from "react-redux"; // useSelector 추가
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Randomitem from "./Randomitem";
import { billboardRandomdset } from "../store/modules/billboardAxios";
import "swiper/css/pagination";
import "swiper/css/navigation";
const BillboradRandombenner = memo(() => {
  const dispatch = useDispatch();
  const billboardRandomdata = useSelector(
    (state) => state.billboarddata.billboardRandomdata
  );
  const loading = useSelector((state) => state.billboarddata.loading);

  useEffect(() => {
    dispatch(billboardRandomdset());
  }, [dispatch, loading]);

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
      <h2>오늘의 추천 Billboard음악</h2>
      <Swiper spaceBetween={30} slidesPerView={wsize===3?5:3} loop={true}>
        {billboardRandomdata.map((i, j) => (
          <SwiperSlide key={j}>
            <Randomitem i={i} listname={`billborad`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Randombennerdiv>
  );
});

export default BillboradRandombenner;
