import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Listitem from "./MusicListitem";
import {
  Homecontent,
  Inner,
  MusicListul,
  Playpushbox,
} from "../assets/css/MusicSub";
import AudioBar from "./AudioBar";
import NavBar from "./NavBar";
import Footer from "../footer/Footer";
import { AiFillCaretRight, AiOutlineShoppingCart } from "react-icons/ai";
import { FaRandom } from "react-icons/fa";
import { kordata } from "../store/modules/kordataAxios";
import { billboarddata } from "../store/modules/billboardAxios";
import {
  AllRandomPlayList,
  addplaylist,
  allAddPlayList,
} from "../store/modules/UserSlice";
import { ImArrowDownLeft } from "react-icons/Im";

const MusicList = memo(() => {
  const [arrowtog, setArrowTog] = useState(false);

  const dispatch = useDispatch();
  const { listname, text, type } = useParams();
  const list = useSelector((state) =>
    listname === `kor`
      ? state.kordata.kodata
      : state.billboarddata.billboarddatas
  );
  const listfilter =
    type === "nop" ? list : list.filter((i) => i[type].includes(text));
  useEffect(() => {
    if (listname === "kor") {
      dispatch(kordata());
    } else {
      dispatch(billboarddata());
    }
  }, [dispatch, listname]);
  const loading = useSelector((state) =>
    listname === "kor" ? state.kordata.loading : state.billboarddata.loading
  );
  if (loading) {
    return <h2>불러오는중</h2>;
  }
  const addplayListALL = () => {
    dispatch(allAddPlayList([...listfilter]));
  };
  const addplayListRandom = () => {
    dispatch(AllRandomPlayList([...listfilter]));
  };
  const instArrow = () => {
    setArrowTog(!arrowtog);
  };

  return (
    <>
      <Homecontent>
        <Inner>
          <Playpushbox>
            <ImArrowDownLeft className={`arrow${arrowtog ? "on" : ""}`} />
            <h2>
              {type === "nop"
                ? listname === `kor`
                  ? "오늘의 한국음악 TOP 100"
                  : "Billboard 음악 T0P 100"
                : `${text} 의 곡`}
            </h2>
            <div className="butbox">
              <button className="typered" onClick={() => addplayListALL()}>
                <AiFillCaretRight style={{ fontSize: 20 }} />
                전체재생
              </button>
              <button className="typebleck" onClick={() => addplayListRandom()}>
                <FaRandom style={{ fontSize: 20 }} />
                랜덤재생
              </button>
              <button className="typebleck" onClick={() => instArrow()}>
                <AiOutlineShoppingCart />
                선택재생
              </button>
            </div>
          </Playpushbox>
          <MusicListul>
            {listfilter.length !== 0 ? (
              <li className="alllist">
                {" "}
                <input type="checkbox" id="all" />
                <label htmlFor="all"></label>
                <span> 전체 {listfilter.length} 곡 </span>{" "}
              </li>
            ) : (
              ""
            )}
            {listfilter.length !== 0 ? (
              listfilter.map((i, j) => (
                <Listitem
                  key={i.rank}
                  i={i}
                  j={j}
                  listname={listname}
                  rankor={type === "nop"}
                  setArrowTog={setArrowTog}
                />
              ))
            ) : (
              <li>
                <h2>검색결과 없음</h2>
              </li>
            )}
          </MusicListul>
        </Inner>
        <Footer />
      </Homecontent>
      <AudioBar />
      <NavBar />
    </>
  );
});

export default MusicList;
