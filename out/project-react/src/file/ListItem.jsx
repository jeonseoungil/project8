import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchData } from "../store/modules/listSlice";
import { ListItemDiv } from "../assets/css/MusicSubcss";
import Footer from "../footer/Footer";
import { Homecontent } from "../assets/css/MusicSub";
import AudioBar from "../components/AudioBar";
import NavBar from "../components/NavBar";

import AOS from "aos";
import "aos/dist/aos.css";

const ListItem = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.data);
  const { listID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const ListSubitem = data.list.find((item) => item.id === Number(listID));
  const { id, title, days, editor, content, category } = ListSubitem;

  const goBackToList = () => {
    navigate("/list");
  };
  return (
    <>
      <ListItemDiv>
        <div data-aos="fade-down" data-aos-duration="500">
          <h2>{title}</h2>
          <div className="item_textbox">
            <p>{category}</p>
            <p>작성일 : {days}</p>
            <p>작성자 : {editor}</p>
          </div>
          <div className="info">
            {ListSubitem.content1 && (
              <div className="itm_box">
                <strong>({ListSubitem.content0})</strong>
                <p>{ListSubitem.content1}</p>
                <img
                  src={ListSubitem.constent1_img}
                  alt=""
                  data-aos="fade-down"
                  data-aos-duration="800"
                />
                <p>{ListSubitem.content2}</p>
                <img
                  src={ListSubitem.constent2_img}
                  alt=""
                  data-aos="fade-down"
                  data-aos-duration="1000"
                />
                <p>{ListSubitem.content3}</p>
                <img
                  src={ListSubitem.constent3_img}
                  alt=""
                  data-aos="fade-down"
                  data-aos-duration="1200"
                />
              </div>
            )}
            {ListSubitem.slide1 && (
              <div>
                {ListSubitem.slide1.map((item, index) => (
                  <img key={index} src={item} alt="" data-aos="fade-up" />
                ))}
              </div>
            )}
            <p>{content}</p>
          </div>
          <p className="button_onprev">
            <button onClick={goBackToList}>목록으로</button>
          </p>
        </div>
      </ListItemDiv>
      <Homecontent>
        <Footer />
        <AudioBar />
        <NavBar />
      </Homecontent>
    </>
  );
};

export default ListItem;
