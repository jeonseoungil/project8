import React from "react";
import { Homecontent, Inner } from "../assets/css/MusicSub";
import AudioBar from "./AudioBar";
import Footer from "../footer/Footer";
import { Membership } from "../assets/css/MusicSubcss";
import { useNavigate } from "react-router-dom";

const Eventbanner = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate("/");
  };
  const Preparing = () => {
    alert("준비 중입니다. 기다려주세요");
  };
  return (
    <Homecontent>
      <Inner>
        <Membership>
          <h2>멤버쉽 구독하기</h2>
          <ul className="textLi">
            <li>
              <strong> 무제한 듣기(모바일 전용)</strong>
              <span>월 3,850원</span>
              <p>부가세 포함</p>
            </li>
          </ul>
          <ul>
            <li>
              <span>2개월 동안 50% 할인된 3,850원이 결제되며,</span>3개월부터 월
              7,700원(부가세 포함)으로 결제됩니다.
            </li>
            <li>본 멤버십은 언제든지 해지할 수 있습니다.</li>
            <li>결제일 7일 전 네이버톡톡으로 결제 알람이 발송됩니다.</li>
          </ul>
          <h3>결제 및 멤버십 유의사항</h3>
          <ul>
            <li>
              매월 정기결제되는 상품으로,  APP에서 무제한 음악 듣기가
              가능합니다.
            </li>
            <li>
              매월 결제일 기준 7일 이내 이용내역이 없는 경우, 청약철회 신청
              가능하며 전액 환불됩니다
            </li>
            <li>
              매월 결제일 기준 7일 이내 이용내역이 있는 경우, 고객센터를 통해
              환불 신청 가능하며 결제 금액에서 이용금액 및 위약금을 제외한
              나머지 금액이 환불됩니다
            </li>
            <li>
              이용금액은 이미 경과된 기간(실제 사용 여부 불문)에 상응하는 금액을
              말합니다.
            </li>
            <li>
              월 결제일 기준 7일 경과 후에는 이용금액과 위약금을 제외한 나머지
              금액이 환불됩니다.
            </li>
            <li>
              위약금은 결제 금액에서 이용금액을 제외한 금액의 10%으로
              계산됩니다.
            </li>
            <li>
              할인 상품의 경우 기 이용금액은 정상가를 기준으로 산정합니다.
            </li>
            <li>
              멤버십 종류에 따라 이용금액을 계좌이체로 지급하신 후 전체 결제
              내역을 취소해 드리는 방식으로 환불 될 수 있습니다.
            </li>
            <li> APP을 지원하는 모바일 기기, 태블릿에서 사용 가능합니다.</li>
            <li>
              여러 기기에서 동시에 접속할 경우 최종 접속된 1개 기기에서만 무제한
              음악 듣기가 가능합니다.
            </li>
            <li>최고 음질(AAC 320K)과 이퀄라이저(EQ) 지원합니다.</li>
            <li>
              E를 원활히 이용하시려면 APP은 iOS 14.0.0 버전 이상, Android 버전
              7.0 이상이 필요합니다.
            </li>
            <li>
              멤버십 이용 중인 ID로 네이버 회원 탈퇴가 이루어지면, 해당 ID로
              이용하던 서비스 또는 멤버십이 종료되며 탈퇴된 회원의 개인 정보 및
              데이터는 즉시 파기되므로, 멤버십 복구 또는 환불이 불가능하다는 점
              유의하시기 바랍니다.
            </li>
            <li>
              멤버십 구매내역을 타인에게 양도하거나, 다른 ID로 이전하는 기능은
              제공하지 않으며, 단체 ID로는 구독이 불가능합니다.
            </li>
            <li>
              BE의 모든 멤버십은 네이버 페이 포인트나 국내에서 발행한 카드와
              계좌를 통해 구매 가능합니다.
            </li>
            <li>
              BE의 모든 멤버십은 네이버 페이 포인트나 국내에서 발행한 카드와
              계좌를 통해 구매 가능합니다
            </li>
            <li>
              환불과 관련한 상세한 내용은 이용 약관과 도움말을 참고해 주십시오.
            </li>
            <li>
              본 멤버십 상품은  서비스 정책에 따라 종료 또는 변경될 수
              있습니다.
            </li>
            <li>
              버십 이용 중인 ID로 네이버 회원 탈퇴가 이루어지면, 해당 ID로
              이용하던 서비스 또는 멤버십이 종료되며 탈퇴된 회원의 개인 정보 및
              데이터는 즉시 파기되므로, 멤버십 복구 또는 환불이 불가능하다는 점
              유의하시기 바랍니다.
            </li>
          </ul>
          <p>
            <button onClick={() => goMain()}>취소</button>
            <button onClick={() => Preparing()}>결제하기</button>
          </p>
        </Membership>
      </Inner>
      <AudioBar />
      <Footer />
    </Homecontent>
  );
};

export default Eventbanner;
