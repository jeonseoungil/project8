import React, { memo, useEffect, useState } from "react";
import { AudioBardiv } from "../assets/css/MusicSub";
import Playlist from "./Playlist";
import { useDispatch, useSelector } from "react-redux";
import { playListToggle, playListandPlay } from "../store/modules/UserSlice";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const AudioBar = memo(() => {
  const dispatch = useDispatch();

  const toggle2 = () => {
    dispatch(playListToggle());
  };
  const { user, selectedSong } = useSelector((state) => state.user);
  const [Musicplaylist, setMusicPlaylist] = useState([]);
  const stoptoggle = (e) => {
    e.stopPropagation();
  };
  useEffect(() => {
    if (user && user.playmusic) {
      setMusicPlaylist(user.playmusic);
      console.log(Musicplaylist);
    }
  }, [user?.playmusic]);

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(Musicplaylist[0]);

  useEffect(() => {
    setCurrentTrack(Musicplaylist[currentTrackIndex]);
  }, [Musicplaylist, currentTrackIndex]);

  const selectimg = Musicplaylist.find(
    (item) => item.name === selectedSong?.name
  );
  return (
    <>
      <AudioBardiv onClick={toggle2}>
        <div>
          <div className="inst">
            {selectimg ? ( // selectimg가 값이 있는 경우
              <div>
                {selectimg.image && (
                  <img
                    src={
                      selectimg.album
                        ? `/${selectimg.image}`
                        : `${selectimg.image}`
                    }
                    alt=""
                  />
                )}
                <span>{selectimg.name}</span>
              </div>
            ) : (
              // selectimg가 값이 없는 경우
              <div>
                {currentTrack && currentTrack.image && (
                  <img
                    src={
                      currentTrack.album
                        ? `/${currentTrack.image}`
                        : `${currentTrack.image}`
                    }
                    alt=""
                  />
                )}
                {currentTrack && <span>{currentTrack.name}</span>}
              </div>
            )}
          </div>
          <div onClick={stoptoggle}>
            <AudioPlayer
              className="audio_player"
              style={{ width: "24%" }}
              autoPlay={false}
              volume={1}
              src="https://docs.google.com/uc?export=open&id=14JlzHWUE2TqAsN237ft43SOw02xDPori"
              onPlay={(e) => console.log("onPlay")}
              onEnded={() => {
                setCurrentTrackIndex(
                  (prevIndex) => (prevIndex + 1) % Musicplaylist.length
                );
              }}
            />
          </div>
        </div>
        <Playlist />
      </AudioBardiv>
    </>
  );
});

export default AudioBar;
