import React from "react";
import { Link } from "react-router-dom";
import { FooterDiv } from "../assets/css/MusicSubcss";

const Footer = () => {
  return (
    <FooterDiv>
      <ul>
        <li>
          (주) 대표 이사 : <p>최수연</p>
        </li>
        <li>
          사업자 등록번호 : <p>000-00-00000</p>
        </li>
        <li>
          통신 판매 업신고 번호 : <p>제2006-경기성남-000호</p>
        </li>
      </ul>
      <ul>
        <li>
          주소 : <p>경기도 성남시 분당구 정자일로 95, 2층 13561</p>
        </li>
        <li>
          대표번호 : <p>0000-0000</p>
        </li>
        <li>
          이메일 : <p>lyola2511@naver.com</p>
        </li>
        <li>
          참고 서비스 제공 : <p>VIBE,FLO,genie</p>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={"/Login/FooterPolicy"}>개인정보처리방침</Link>
        </li>
        <li>
          <Link to={"/Login/FooterPolicy"}>이용약관</Link>
        </li>
        <li>
          <Link to={"/storage"}>고객센터</Link>
        </li>
        <li>
          <Link to={"/storage"}>결제 / 환불 관리</Link>
        </li>
      </ul>
    </FooterDiv>
  );
};

export default Footer;
