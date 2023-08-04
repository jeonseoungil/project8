import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT, userAdd } from "../store/modules/UserSlice";
import { Homecontent, Inner } from "../assets/css/MusicSub";
import AudioBar from "../components/AudioBar";
import NavBar from "../components/NavBar";
import Footer from "../footer/Footer";
import KorRandombenner from "../components/KorRandombenner";
import BillboradRandombenner from "../components/BillboradRandombenner";
import KorlistBenner from "../components/KorlistBenner";
import BillboardBenner from "../components/BillboardBenner";
import TodayRecommend from "../components/TodayRecommend";

const Main = () => {
  const [jsonData, setJsonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json"
        );
        setJsonData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <Homecontent>
      <Inner>
        <TodayRecommend />
        <KorlistBenner />
        <KorRandombenner />
        <BillboardBenner />
        <BillboradRandombenner />
      </Inner>
      <Footer />
      <AudioBar />
      <NavBar />
    </Homecontent>
  );
};

export default Main;
