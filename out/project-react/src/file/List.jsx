import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai";

import {
  Menu,
  fetchData,
  setRandomUrls,
  changeInput,
  searchList,
} from "../store/modules/listSlice";
import { ListDiv } from "../assets/css/MusicSubcss";
import Footer from "../footer/Footer";
import { Homecontent } from "../assets/css/MusicSub";
import AudioBar from "../components/AudioBar";
import NavBar from "../components/NavBar";

import AOS from "aos";
import "aos/dist/aos.css";

const List = () => {
  const { data, randomUrls, searchTerm, filteredBySearch } = useSelector(
    (state) => state.data
  );
  const [outputCount, setOutputCount] = useState(data.list.length);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const filteredList = data.filtered1 || data.list;
  /* json파일에서 랜덤한 객체 값 가져오기 */
  const handleOutputCountChange = () => {
    const newOutputCount = Math.min(outputCount + 10, data.list.length);
    setOutputCount(newOutputCount);
    const shuffledUrls = data.list.slice().sort(() => Math.random() - 0.5);
    const randomUrls = shuffledUrls.slice(0, newOutputCount);
    dispatch(setRandomUrls(randomUrls));
    if (searchTerm || data.filtered1) {
      dispatch(Menu("전체"));
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(searchList(searchTerm));
  };

  const handleMenuClick = (category) => {
    dispatch(Menu(category));
    dispatch(changeInput(""));
    setOutputCount(10);
  };

  return (
    <>
      <ListDiv>
        <h2>고객지원센터</h2>
        <ul>
          <li onClick={() => handleMenuClick("전체")}>전체</li>
          <li onClick={() => dispatch(Menu("공지사항"))}>공지사항</li>
          <li>
            <Link to={"/list/QNA"}>QNA</Link>
          </li>
          <li onClick={() => dispatch(Menu("이벤트"))}>진행 중인 이벤트</li>
        </ul>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => dispatch(changeInput(e.target.value))}
            placeholder="검색어를 입력해주세요"
          />
          <button type="onSubmit">
            <AiOutlineSearch />
          </button>
        </form>
        <table>
          <caption>LIST</caption>
          <colgroup>
            <col className="NO" />
            <col className="table_title" />
            <col className="table_editor" />
            <col className="table_days" />
          </colgroup>
          <thead>
            <tr>
              <th>종류</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {filteredBySearch.length > 0
              ? filteredBySearch.map((item, idx) => (
                  <tr
                    key={idx}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <td>{item.category}</td>
                    <td>
                      <Link to={`/list/${item.id}`}>{item.title}</Link>
                    </td>
                    <td>{item.editor}</td>
                    <td>{item.days}</td>
                  </tr>
                ))
              : filteredList.map((item) => (
                  <tr
                    key={item.id}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <td>{item.category}</td>
                    <td>
                      <Link to={`/list/${item.id}`}>{item.title}</Link>
                    </td>
                    <td>{item.editor}</td>
                    <td>{item.days}</td>
                  </tr>
                ))}
            {randomUrls.map((item, idx) => (
              <tr
                key={idx}
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <td>{item.category}</td>
                <td>
                  <Link to={`/list/${item.id}`}>{item.title}</Link>
                </td>
                <td>{item.editor}</td>
                <td>{item.days}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {!searchTerm && !data.filtered1 && randomUrls.length !== 90 && (
          <p>
            <button onClick={handleOutputCountChange}>
              더 보기
              <AiOutlineDown />
            </button>
          </p>
        )}
      </ListDiv>
      <Homecontent>
        <Footer />
        <AudioBar />
        <NavBar />
      </Homecontent>
    </>
  );
};

export default List;
