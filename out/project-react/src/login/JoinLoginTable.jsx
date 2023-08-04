import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEMAIL,
  changePASSWORD,
  changePHONE,
  changeUSERID,
  onSignUpSubmit,
  chingeselect,
  chingeREPASSWORD,
} from "../store/modules/LoginSignUp";
import { Link, useNavigate } from "react-router-dom";
import { JoinTable } from "../assets/css/MusicSubcss";
import Footer from "../footer/Footer";
import { Homecontent } from "../assets/css/MusicSub";
import AudioBar from "../components/AudioBar";
import NavBar from "../components/NavBar";

const JoinLoginTable = () => {
  const { UserID, UserPassword, eMail, phone, eMail_select, repassword } =
    useSelector((state) => state.signup);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const OnsubMit_signUp = (e) => {
    e.preventDefault();
    dispatch(onSignUpSubmit(e.target.value));
    if (
      UserID &&
      UserPassword &&
      eMail &&
      phone &&
      eMail_select &&
      UserPassword === repassword
    ) {
      navigate("/Login/completed");
    }
  };
  return (
    <>
      <JoinTable>
        <div>
          <h2>
            <Link to={"/"}>
              <img src="../public/images/logo_white.jpg" alt="" />
            </Link>
          </h2>
          <div>
            <form onSubmit={OnsubMit_signUp}>
              <h3>회원가입</h3>
              <div>
                <input
                  type="text"
                  value={UserID}
                  placeholder="아이디혹은 이메일 주소를 입력해주세요"
                  onChange={(e) => dispatch(changeUSERID(e.target.value))}
                />
                <p>4~12자/영문 소문자(숫자 조합 가능)</p>
              </div>
              <div>
                <input
                  type="text"
                  alue={UserPassword}
                  placeholder="비밀번호"
                  onChange={(e) => dispatch(changePASSWORD(e.target.value))}
                />
                <input
                  type="text"
                  value={repassword}
                  placeholder="비밀번호 확인"
                  onChange={(e) => dispatch(chingeREPASSWORD(e.target.value))}
                />
                <p>
                  8~20자/영문 대문자, 소문자, 숫자, 특수문자 중 2가지 이상 조합
                </p>
              </div>
              <div>
                <input
                  type="text"
                  value={eMail}
                  className="emil"
                  placeholder="아이디(이메일)"
                  onChange={(e) => dispatch(changeEMAIL(e.target.value))}
                />
                @
                <select
                  value={eMail_select}
                  placeholder="선택"
                  onChange={(e) => dispatch(chingeselect(e.target.value))}
                >
                  <option value="choice">선택</option>
                  <option value="naver.com">naver.com</option>
                  <option value="daum.net">daum.net</option>
                  <option value="kakao.com">kakao.com</option>
                  <option value="gmail.com">gmail.com</option>
                </select>
                <p>
                  더 안전하게 계정을 보호하려면 가입 후 [내정보 - 회원정보
                  수정]에서 이메일 인증을 진행해주세요.
                </p>
              </div>
              <div>
                <input
                  type="text"
                  value={phone}
                  placeholder="휴대폰 번호를 입력해주세요"
                  onChange={(e) => dispatch(changePHONE(e.target.value))}
                />
                <p>
                  휴대폰 인증 후 이용가능합니다 인증은 [내정보-회원정보
                  수정]에서 진행해주세요
                </p>
              </div>
              <p type="submit" onClick={OnsubMit_signUp} className="Certified">
                가입하기
              </p>
            </form>
          </div>
        </div>
      </JoinTable>
      <Homecontent>
        <Footer />
        <AudioBar />
        <NavBar />
      </Homecontent>
    </>
  );
};

export default JoinLoginTable;
