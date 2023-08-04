import React, { memo, useEffect, useState } from "react";
import axios from "axios";
import { Homecontent, Inner, Img } from "../assets/css/MusicSub";
import AudioBar from "../components/AudioBar";
import NavBar from "../components/NavBar";
import Footer from "../footer/Footer";
import KorRandombenner from "../components/KorRandombenner";
import BillboradRandombenner from "../components/BillboradRandombenner";
import { useDispatch } from "react-redux";
import { kordata } from "../store/modules/kordataAxios";
import { billboarddata } from "../store/modules/billboardAxios";
import TodayRecommend from "../components/TodayRecommend";
import { useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(kordata());
    dispatch(billboarddata());
  }, [dispatch]);

  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const event = () => {
    navigate("/event");
  };

  return (
    <>
      <Homecontent>
        <Inner>
          <TodayRecommend />
          <KorRandombenner />
          <BillboradRandombenner />
          <Img
            src="./images/eventbanner.png"
            alt=""
            onClick={() => event()}
            data-aos="fade-down"
            data-aos-duration="2000"
          />
        </Inner>
        <Footer />
        <AudioBar />
        <NavBar />
      </Homecontent>
    </>
  );
});
export default Home;
