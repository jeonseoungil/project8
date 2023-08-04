import React, { memo } from "react";
import { Randomitemdiv } from "../assets/css/MusicSub";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addplaylist } from "../store/modules/UserSlice";
const Randomitem = memo(({ i, listname }) => {
  const dispatch = useDispatch();
  const imgonclick = (e) => dispatch(addplaylist(i));
  return (
    <Randomitemdiv>
      <img
        src={`${listname === "kor" ? `/${i.image}` : `${i.image}`}`}
        alt=""
        onClick={imgonclick}
        style={{ cursor: "pointer" }}
      />
      <NavLink to={`/chart/${i.rank}/${listname}`}>
        {" "}
        <h3 style={{ color: "white" }}>{i.name}</h3>{" "}
      </NavLink>
      <NavLink to={`/chart/${listname}/${i.artist}/${`artist`}`}>
        <h4>{i.artist}</h4>
      </NavLink>
    </Randomitemdiv>
  );
});
export default Randomitem;
