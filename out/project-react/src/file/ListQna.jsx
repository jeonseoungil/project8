import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Qna_Menu, fetchData } from "../store/modules/listSlice";
import { useNavigate } from "react-router-dom";
import { ListQnaDiv } from "../assets/css/MusicSubcss";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Footer from "../footer/Footer";
import { Homecontent } from "../assets/css/MusicSub";
import AudioBar from "../components/AudioBar";
import NavBar from "../components/NavBar";

const ListQna = () => {
  const { data } = useSelector((state) => state.data);
  const [isChk, setIsChk] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchData());
    console.log(data.qna);
  }, [dispatch]);
  const filteredList2 = data.filtered2 || data.qna;

  const prev = () => {
    navigate("/list");
  };

  const toggle = (id) => {
    if (isChk === id) {
      setIsChk(null);
    } else {
      setIsChk(id);
    }
  };

  return (
    <>
      {" "}
      <ListQnaDiv>
        <ul>
          <li className="QnaMenu" onClick={() => dispatch(Qna_Menu("전체"))}>
            전체 보기
          </li>
          <li
            className="QnaMenu"
            onClick={() => dispatch(Qna_Menu("개인정보"))}
          >
            개인정보
          </li>
          <li
            className="QnaMenu"
            onClick={() => dispatch(Qna_Menu("공지사항"))}
          >
            공지사항
          </li>
        </ul>
        <table>
          <caption>QNA</caption>
          <colgroup>
            <col className="table_No" />
            <col className="tableQna_title" />
          </colgroup>
          <thead>
            <tr>
              <th>NO.</th>
              <th>제목</th>
            </tr>
          </thead>
          <tbody>
            {filteredList2.map((item) => (
              <tr key={item.id}>
                <td>{item.category}</td>
                <td onClick={() => toggle(item.id)}>
                  <strong className={isChk === item.id ? "on" : ""}>
                    {item.titel}
                  </strong>
                  {isChk === null ? (
                    <p className={isChk === item.id ? "on" : ""}>
                      <AiOutlineDown />{" "}
                    </p>
                  ) : (
                    <p className={isChk === item.id ? "on" : ""}>
                      <AiOutlineUp />{" "}
                    </p>
                  )}
                  <ul className={isChk === item.id ? "on" : ""}>
                    <li>{item.content}</li>
                    {item.img && (
                      <li>
                        <img src={item.img} alt="" />
                      </li>
                    )}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="prev">
          <button onClick={prev}>목록으로 가기</button>{" "}
        </p>
      </ListQnaDiv>
      <Homecontent>
        <Footer />
        <AudioBar />
        <NavBar />
      </Homecontent>
    </>
  );
};

export default ListQna;
