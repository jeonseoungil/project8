import React, { memo, useEffect, useState } from "react";
import { NavBardiv } from "../assets/css/MusicSub";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  AiFillBell,
  AiFillDropboxCircle,
  AiFillGift,
  AiFillHome,
  AiFillTrophy,
  AiOutlineLogout,
  AiOutlineUser,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../store/modules/UserSlice";
import { loggout } from "../store/modules/LoginSignUp";

const NavBar = memo(() => {
  const navi = useNavigate();
  const [searchtext, settext] = useState("");
  const inputchange = (e) => settext(e.target.value);
  const searchsubmit = (e) => {
    e.preventDefault();
    navi(`/${searchtext}`);
  };
  const { user } = useSelector((state) => state.user);
  const { newSignUpData } = useSelector((state) => state.signup);
  const login_UserID = user && user.login_UserID;
  const dispatch = useDispatch();

  const savelogout = () => {
    dispatch(loggout(user));
    dispatch(LOGOUT());
    navi("/");
  };

  const getInitialSize = () => {
    return window.innerWidth <= 1400 ? 2 : 3;
  };

  const [size, setsize] = useState(getInitialSize());

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1400) {
        setsize(3);
      } else {
        setsize(2);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size]);
  const box = (e) => {
    if (!user) {
      alert("로그인 후 이용 가능합니다.");
      e.preventDefault();
    }
  };
  return (
    <NavBardiv>
      <h2>
        <NavLink to="/">
          {size === 3 ? (
            <img className="big" src="/biglogo.png" alt="" />
          ) : (
            <img className="small" src="/vite.svg" alt="" />
          )}
        </NavLink>
      </h2>
      <hr />
      {user ? (
        <>
          {size === 3 ? (
            <Link to={`/storage`}>
              <span> {login_UserID} 님 환영합니다! </span>
            </Link>
          ) : null}
          <button className="logoutbit" onClick={() => savelogout()}>
            {" "}
            <AiOutlineLogout />
            {size === 3 ? "로그아웃" : ""}
          </button>
        </>
      ) : (
        <NavLink to={`/Login`}>
          <AiOutlineUser />
          <span>{size === 3 ? "로그인" : ""}</span>{" "}
        </NavLink>
      )}
      <hr />
      {size === 3 ? (
        <>
          <form onSubmit={searchsubmit}>
            <input
              type="text"
              placeholder="검색 가능"
              value={searchtext}
              onChange={inputchange}
            />
          </form>
          <hr />
        </>
      ) : null}
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "on" : "")}>
            <AiFillHome />
            {size === 3 ? "홈" : ""}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/chart"
            className={({ isActive }) => (isActive ? "on" : "")}
          >
            <AiFillTrophy /> {size === 3 ? "차트" : ""}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/storage"
            onClick={box}
            className={({ isActive }) => (isActive ? "on" : "")}
          >
            <AiFillDropboxCircle />
            {size === 3 ? "보관함" : ""}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/list"
            className={({ isActive }) => (isActive ? "on" : "")}
          >
            <AiFillBell />
            {size === 3 ? "리스트" : ""}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/event"
            className={({ isActive }) => (isActive ? "on" : "")}
          >
            <AiFillGift />
            {size === 3 ? "멤버쉽" : ""}
          </NavLink>
        </li>
      </ul>
    </NavBardiv>
  );
});

export default NavBar;
