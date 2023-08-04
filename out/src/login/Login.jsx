import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  changeInputID,
  changeInputPassword,
  loginOnSubmit,
} from "../store/modules/UserSlice";
import { LoginDivBG } from "../assets/css/MusicSubcss";
import Footer from "../footer/Footer";
import { Homecontent } from "../assets/css/MusicSub";
import AudioBar from "../components/AudioBar";
import NavBar from "../components/NavBar";

const Login = () => {
  const { login_UserID, login_UserPassword } = useSelector(
    (state) => state.user
  );
  const { newSignUpData } = useSelector((state) => state.signup);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onloginSubmit = (e) => {
    e.preventDefault();
    const compare = newSignUpData.find(
      (itme) =>
        itme.UserID === login_UserID && itme.UserPassword === login_UserPassword
    );
    if (compare) {
      console.log("로그인 성공");
      dispatch(loginOnSubmit(compare));
      navigate("/");
    } else {
      console.log("로그인 실패");
      alert("정보를 다시 확인해 주세요");
    }
  };
  return (
    <>
      <LoginDivBG>
        <h2>LOGIN</h2>
        <form onSubmit={onloginSubmit}>
          <input
            type="text"
            value={login_UserID}
            onChange={(e) => dispatch(changeInputID(e.target.value))}
            placeholder="아이디(이메일)"
          />
          <input
            type="text"
            value={login_UserPassword}
            onChange={(e) => dispatch(changeInputPassword(e.target.value))}
            placeholder="비밀번호"
          />
          <div className="login_submit">
            <input type="checkbox" />
            <label>아이디 저장</label>
            <button type="submit" className="Login_Btn">
              로그인
            </button>
          </div>
          <p className="LoginJoin_btn">
            <Link to="/Login/join">회원가입</Link>
          </p>
          <p className="Login_type">
            <button>아이디로 로그인하기</button>
            <button>이메일로 로그인하기</button>
          </p>
        </form>
      </LoginDivBG>
      <Homecontent>
        <Footer />
        <AudioBar />
        <NavBar />
      </Homecontent>
    </>
  );
};

export default Login;
