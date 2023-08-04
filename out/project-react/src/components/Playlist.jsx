import React, { memo, useEffect, useState } from "react";
import axios from "axios";
import { Playlistdiv } from "../assets/css/MusicSub";
import { AiOutlineInteraction } from "react-icons/ai";
import { BsCaretRightFill } from "react-icons/Bs";
import { FaRandom } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/Ri";
import { useDispatch, useSelector } from "react-redux";
import Smallitem from "./Smallitem";
import {
  addplayListMusic,
  allremoveplaylist,
  randomPlayList,
} from "../store/modules/UserSlice";

const Playlist = memo(() => {
  const { playListtog, user } = useSelector((state) => state.user);
  const [jsonData, setJsonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json"
        );
        setJsonData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const MusicPlayAdd = (value) => {
    if (!user || !user.playList) {
      alert("로그인 후 재생이 가능합니다.");
    } else {
      dispatch(addplayListMusic(value));
    }
  };
  return (
    <Playlistdiv className={playListtog ? "on" : ""}>
      <div className="cover">
        {user && user.playList && user.playList.length > 0 ? (
          <img src={user.playList[0].peak_rank === "" ? `/${user.playList[0].image}` : `${user.playList[0].image}`} alt="" />
        ) : user && user.playList && user.playList.length === 0 ? null : (
          <img src={jsonData[0].image} alt="" />
        )}
      </div>
      <div className="playmusiclist">
        <div className="playbutbox">
          <h2>플레이 리스트</h2>
          <div className="playlistbut">
            <h2 onClick={() => dispatch(allremoveplaylist())}>
              <RiDeleteBinFill />
            </h2>
            <h2 onClick={() => dispatch(randomPlayList(user.playList))}>
              <FaRandom />
            </h2>
            <h2>
              {user ? (
                <BsCaretRightFill onClick={() => MusicPlayAdd(user.playList)} />
              ) : (
                <BsCaretRightFill onClick={() => MusicPlayAdd(jsonData)} />
              )}
            </h2>
          </div>
        </div>
        <ul>
          {user
            ? user.playList.map((item, idx) => <Smallitem z={item} key={idx} />)
            : jsonData.map((item, idx) => <Smallitem z={item} key={idx} />)}
        </ul>
      </div>
    </Playlistdiv>
  );
});

export default Playlist;
