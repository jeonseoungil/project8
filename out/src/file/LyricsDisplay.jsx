import React, { useEffect, useState } from "react";
import axios from "axios";
import { Longbut, Lyricstext } from "../assets/css/MusicSubcss";

const Lyrics = ({ artist, song }) => {
  const [lyrics, setLyrics] = useState("");
  const [longbut , setlongbut] = useState(false)
  useEffect(() => {
    const fetchLyrics = async () => {
      const apiKey = "021b67939de3203f3f7ac2782d3b08a2";

      const url = `https://api.vagalume.com.br/search.php?apikey=${apiKey}&art=${encodeURIComponent(
        artist
      )}&mus=${encodeURIComponent(song)}`;

      try {
        const response = await axios.get(url);
        if (response.data.type === "exact") {
          setLyrics(response.data.mus[0].text);
        } else {
          console.error("Lyrics not found.");
        }
      } catch (error) {
        console.error("Error fetching lyrics:", error);
      }
    };

    fetchLyrics();
  }, []);

  return (
    <>
    <Lyricstext style={{ height: longbut? '':400}}>
      {lyrics ? <p>{lyrics}</p> : <p>가사를 불러오는 중...</p>}
    </Lyricstext>
    <Longbut>
    <button onClick={()=>setlongbut(!longbut)} >{longbut ? "접기":"더보기"}</button>
    </Longbut>
    </>
  );
};

export default Lyrics;
