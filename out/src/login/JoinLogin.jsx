import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  changeChked1,
  changeChked2,
  changeChked3,
  changeChked4,
  changeChked5,
  changetotal,
  onchkedsubmit,
} from "../store/modules/LoginSignUp";
import { JoinConditionsBG } from "../assets/css/MusicSubcss";
import Footer from "../footer/Footer";
import { Homecontent } from "../assets/css/MusicSub";
import AudioBar from "../components/AudioBar";
import NavBar from "../components/NavBar";
const JoinLogin = () => {
  const { chked1, chked2, chked3, chked4, chked5, totalChked } = useSelector(
    (state) => state.signup
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const chkedsubmit = (e) => {
    e.preventDefault();
    dispatch(onchkedsubmit(e.target.value));
    if (chked1 && chked2 && chked3) {
      console.log("필수 약관 동의");
      navigate("/Login/joinup");
    }
  };
  return (
    <>
      <JoinConditionsBG>
        <div>
          <h2>
            <Link to={"/"}>
              <img src="../public/images/logo_white.jpg" alt="" />
            </Link>
          </h2>
          <form onSubmit={chkedsubmit}>
            <h3>이용약관</h3>
            <div>
              <input
                type="checkbox"
                checked={chked1}
                onChange={() => dispatch(changeChked1())}
              />
              <label>
                <p>(필수)</p>
                <span>이용약관</span>
              </label>
              <strong>
                <Link to="/Login/FooterPolicy">전문보기</Link>
              </strong>
            </div>
            <div>
              <input
                type="checkbox"
                checked={chked2}
                onChange={() => dispatch(changeChked2())}
              />
              <label>
                <p>(필수)</p>
                <span>개인 정보 수집 및 이용안내</span>
              </label>
              <strong>
                <Link to="/Login/FooterPolicy">전문보기</Link>
              </strong>
            </div>
            <div>
              <input
                type="checkbox"
                checked={chked3}
                onChange={() => dispatch(changeChked3())}
              />
              <label>
                <p>(필수)</p>
                <span> 제 3자 제공안내</span>
              </label>
              <strong>
                <Link to="/Login/FooterPolicy">전문보기</Link>
              </strong>
            </div>
            <div>
              <input
                type="checkbox"
                checked={chked4}
                onChange={() => dispatch(changeChked4())}
              />
              <label>
                <p>(선택)</p>
                <span>이벤트/기타 문자 수신 동의</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={chked5}
                onChange={() => dispatch(changeChked5())}
              />
              <label>
                <p>(선택)</p>
                <span>
                  이벤트/혜택 알림 제공을 위한 개인정보 수집 및 이용 안내
                </span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={totalChked}
                onChange={() => dispatch(changetotal())}
              />
              <label>
                <span>전체 동의</span>
              </label>
              <em>
                주요 공지사항 및 결제 관련 정보일 경우, 정보 수신 동의 여부에
                관계없이 발송됩니다.
              </em>
            </div>
            <p>
              <button type="submit" onClick={chkedsubmit}>
                회원 가입하기
              </button>
            </p>
          </form>
        </div>
      </JoinConditionsBG>
      <Homecontent>
        <Footer />
        <AudioBar />
        <NavBar />
      </Homecontent>
    </>
  );
};

export default JoinLogin;
