import React, { memo } from "react";
import { Homecontent, Inner, MusicChartdiv } from "../assets/css/MusicSub";
import KorlistBenner from "../components/KorlistBenner";
import AudioBar from "../components/AudioBar";
import NavBar from "../components/NavBar";
import BillboardBenner from "../components/BillboardBenner";
import Footer from "../footer/Footer";

const MusicChart = memo(() => {
  return (
    <>
      <Homecontent>
        <Inner>
        <h2> 차트</h2>
        <KorlistBenner />
        <br />
        <BillboardBenner />
        </Inner>
        <Footer />
      </Homecontent>
      <AudioBar />
      <NavBar />
    </>
  );
});

export default MusicChart;
