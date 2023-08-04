import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginComplet } from "../assets/css/MusicSubcss";
import { AiOutlineDownCircle } from "react-icons/ai";
import Footer from "../footer/Footer";
import { Homecontent } from "../assets/css/MusicSub";
import AudioBar from "../components/AudioBar";
import NavBar from "../components/NavBar";

const SignUpCompleted = () => {
  const navigate = useNavigate();
  const goLogin = () => {
    navigate("/Login");
  };
  return (
    <>
      <LoginComplet>
        <div>
          <h2>
            <AiOutlineDownCircle />
          </h2>
          <h3>회원가입이 완료되었습니다.</h3>
          <strong>
            최초 로그인 시 본인인증을 필요합니다. 본인인증 시 더 많은 헤턕과
            서비스 시용이 가능합니다. [개인정보]칸에서 휴대폰/이메일 인증을
            진행해주세요
          </strong>
          <p>
            <button onClick={goLogin}>로그인하러 가기</button>
          </p>
        </div>
      </LoginComplet>
      <Homecontent>
        <Footer />
        <AudioBar />
        <NavBar />
      </Homecontent>
    </>
  );
};

export default SignUpCompleted;
