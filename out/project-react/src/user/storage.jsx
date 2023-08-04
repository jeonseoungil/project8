import React, { useEffect } from "react";
import { BsChevronRight } from "react-icons/Bs";
import { MdOutlineQueueMusic } from "react-icons/Md";
import { MdPersonAddAlt1 } from "react-icons/Md";
import { useSelector, useDispatch } from "react-redux";
import { StorageDiv } from "../assets/css/MusicSubcss";
import Footer from "../footer/Footer";
import { Homecontent } from "../assets/css/MusicSub";
import AudioBar from "../components/AudioBar";
import NavBar from "../components/NavBar";
import {
  addplaylist,
  playListToggle,
  removeplaylist,
} from "../store/modules/UserSlice";
import { useIsfindList } from "../hook/IsPlayAdd";
import { useNavigate } from "react-router-dom";

const Storage = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const toggle2 = () => {
    dispatch(playListToggle());
  };

  const isSongAdded = useIsfindList(user.pick, user); // 커스텀 훅 호출
  const findplayListadd = (id) => {
    const playList = user.pick.find((song) => song.rank === id);
    const isAdded = isSongAdded(id);
    if (isAdded) {
      alert("이미 추가된 노래입니다.");
    } else {
      dispatch(addplaylist(playList));
    }
  };
  const deleteplayList = (name) => {
    dispatch(removeplaylist(name));
  };
  const isNameExistInPlayList = (name) => {
    return user.playList.some((item) => item.name === name);
  };

  return (
    <>
      <Homecontent>
        <StorageDiv>
          <h2>플레이리스트</h2>
          <div className="playList" onClick={toggle2}>
            <p className="storageBox">
              <MdOutlineQueueMusic />
            </p>
            <strong>"{user.login_UserID}"님의 플레이리스트</strong>
            <p>
              <BsChevronRight />
            </p>
          </div>
          <div>
            <h2>좋아요 누른 내 노래</h2>
            <table className="table1">
              <caption>좋아요 노래 리스트</caption>
              <colgroup>
                <col className="LOCAL_NO" />
                <col className="LOCAL_title" />
                <col className="LOCAL_img" />
                <col className="LOCAL_singer" />
                <col className="LOCAL_button" />
              </colgroup>
              <thead>
                <tr>
                  <th>순위</th>
                  <th>앨범자켓</th>
                  <th>노래명</th>
                  <th>가수명</th>
                  <th>플레이리스트</th>
                </tr>
              </thead>
              <tbody>
                {user &&
                  user.pick &&
                  user.pick.length > 0 &&
                  user.pick.map((item, idx) => (
                    <tr key={idx}>
                      <td>
                        <p>{idx}</p>
                      </td>
                      <td>
                        <img src={item.image} alt={item.name} />
                      </td>
                      <td>
                        <p>{item.name}</p>
                      </td>
                      <td>
                        <p>{item.artist}</p>
                      </td>
                      <td>
                        {isNameExistInPlayList(item.name) ? null : (
                          <button onClick={() => findplayListadd(item.rank)}>
                            플레이리스트에 추가
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <h2>플레이리스트</h2>
            <table className="table2">
              <caption>플레이 리스트 목록</caption>
              <colgroup>
                <col className="LOCAL_NO" />
                <col className="LOCAL_title" />
                <col className="LOCAL_img" />
                <col className="LOCAL_singer" />
                <col className="LOCAL_button" />
              </colgroup>
              <thead>
                <tr>
                  <th>순위</th>
                  <th>앨범자켓</th>
                  <th>노래명</th>
                  <th>가수명</th>
                  <th>플레이리스트</th>
                </tr>
              </thead>
              {user && user.playList && user.playList.length > 0 && (
                <tbody>
                  {user.playList.map((item, idx) => (
                    <tr key={idx}>
                      <td>
                        <p>{idx}</p>
                      </td>
                      <td>
                        {item && item.image && (
                          <img src={item.image} alt={item.name} />
                        )}
                      </td>
                      <td>
                        <p>{item && item.name}</p>
                      </td>
                      <td>
                        <p>{item && item.artist}</p>
                      </td>
                      <td>
                        <button onClick={() => deleteplayList(item.name)}>
                          삭제
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </StorageDiv>
        <Footer />
        <AudioBar />
        <NavBar />
      </Homecontent>
    </>
  );
};

export default Storage;
