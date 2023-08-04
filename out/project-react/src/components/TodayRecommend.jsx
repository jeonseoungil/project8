import { useDispatch, useSelector } from "react-redux";
import { TodayRecommendationDIV } from "../assets/css/MusicSub";
import { kordata } from "../store/modules/kordataAxios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TodayRecommend = () => {
  const [data, setData] = useState([]);
  const { kodata } = useSelector((state) => state.kordata);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(kordata());
  }, [dispatch]);

  useEffect(() => {
    if (kodata.length > 0) {
      setData(kodata[10]);
    }
  }, [kodata]);
  const navigate = useNavigate();
  const pageON = () => {
    navigate("/chart/11/kor");
  };
  return (
    <>
      <TodayRecommendationDIV onClick={pageON}>
        <img src="./img/Ditto2.jpg" alt="" />
        <div>
          <p>
            <i></i>
          </p>
          <span>오늘의 추천 음악</span>
          <b>컴백 소리가 들려,</b>
          <strong>{data.name}</strong>
          <strong>{data.artist}</strong>
          <p>
            가장 NewJenans다운 모습으로 돌아왔다. 가장 뜨겁고 가장 시원한 여름이
            담긴 노래로.
          </p>
          <p> MAG 작성일 2023.07.25</p>
        </div>
      </TodayRecommendationDIV>
    </>
  );
};

export default TodayRecommend;
