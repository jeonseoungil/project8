import React, { memo, useEffect } from "react";
import AudioBar from "./AudioBar";
import NavBar from "./NavBar";
import { Homecontent, Inner, Searchpagediv } from "../assets/css/MusicSub";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../footer/Footer";
import { billboarddata } from "../store/modules/billboardAxios";
import { kordata as kor } from "../store/modules/kordataAxios";

const Searchpage = memo(() => {
  const { searchtext } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      dispatch(billboarddata());
      dispatch(kor());
    };
    fetchData();
  }, [dispatch]);

  const billboarddatas = useSelector(
    (state) => state.billboarddata.billboarddatas
  );
  const kordata = useSelector((state) => state.kordata.kodata);
  /* 데이터 가져오기 */
  const kornamefilter = kordata.filter((i) =>
    i.name.toLowerCase().includes(searchtext.toLowerCase())
  );
  const billboardnamefilter = billboarddatas.filter((i) =>
    i.name.toLowerCase().includes(searchtext.toLowerCase())
  );
  const koralbumfilter = kordata.filter((i) =>
    i.album.toLowerCase().includes(searchtext.toLowerCase())
  );
  const korartistfilter = kordata.filter((i) =>
    i.artist.toLowerCase().includes(searchtext.toLowerCase())
  );
  const billboardartistfilter = billboarddatas.filter((i) =>
    i.artist.toLowerCase().includes(searchtext.toLowerCase())
  );
  console.log(kordata);
  console.log(billboarddatas);
  return (
    <>
      <Homecontent>
        <Inner>
          <Searchpagediv>
            <h2>{searchtext} 검색결과</h2>
            <h3>곡 제목</h3>
            <br />
            <h4>한국곡</h4>
            <br />
            <ul>
              {kornamefilter.length !== 0 ? (
                kornamefilter
                  .slice(0, 3)
                  .map((i) => <li style={{ color: "yellow" }}>{i.name}</li>)
              ) : (
                <li>검색결과 없음</li>
              )}
            </ul>
            <br />
            <h4>billboard 곡</h4>
            <br />
            <ul>
              {billboardnamefilter.length !== 0 ? (
                billboardnamefilter.slice(0, 3).map((i, z) => (
                  <li key={z} style={{ color: "yellow" }}>
                    {i.name}
                  </li>
                ))
              ) : (
                <li className="null">검색결과 없음</li>
              )}
            </ul>
            <h3>엘범 제목</h3>
            <h4>한국 엘범</h4>
            <br />
            <ul>
              {koralbumfilter.length !== 0 ? (
                koralbumfilter.slice(0, 3).map((i) => (
                  <li style={{ color: "yellow" }}>
                    <div>
                      <img src={i.image} alt="" /> {i.album}
                    </div>
                  </li>
                ))
              ) : (
                <li>검색결과 없음</li>
              )}
            </ul>
            <br />
            <h3>가수</h3>
            <h4>한국 가수</h4>
            <br />
            <ul>
              {korartistfilter.length !== 0 ? (
                korartistfilter
                  .slice(0, 3)
                  .map((i) => <li style={{ color: "yellow" }}>{i.artist}</li>)
              ) : (
                <li>검색결과 없음</li>
              )}
            </ul>
            <br />
            <h4>billboard 가수</h4>
            <br />
            <ul>
              {billboardartistfilter.length !== 0 ? (
                billboardartistfilter
                  .slice(0, 3)
                  .map((i) => <li style={{ color: "yellow" }}>{i.artist}</li>)
              ) : (
                <li>검색결과 없음</li>
              )}
            </ul>
          </Searchpagediv>
        </Inner>
        <Footer />
      </Homecontent>

      <AudioBar />
      <NavBar />
    </>
  );
});

export default Searchpage;
