import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  status: "idle",
  isplay: false,
  login_UserID: "",
  login_UserPassword: "",
  playListtog: false,
  selectedSong: [],
};
function newrandomPlayList(value) {
  const newRandomPlayList = [...value];
  newRandomPlayList.sort(() => Math.random() - 0.5);
  return newRandomPlayList;
}
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    playListToggle(state, action) {
      state.playListtog = !state.playListtog;
    },
    changeInputID(state, action) {
      state.login_UserID = action.payload;
    },
    changeInputPassword(state, action) {
      state.login_UserPassword = action.payload;
    },
    loginOnSubmit(state, action) {
      const compare = action.payload;
      console.log(compare);

      if (compare) {
        if (
          compare.user &&
          compare.user.pick &&
          compare.user.playList &&
          compare.user.playmusic
        ) {
          state.user = {
            login_UserID: compare.UserID,
            login_UserPassword: compare.UserPassword,
            ...compare.user,
          };
        } else {
          state.user = {
            login_UserID: compare.UserID,
            login_UserPassword: compare.UserPassword,
            pick: [],
            playList: [],
            playmusic: [],
          };
        }

        localStorage.setItem("user", JSON.stringify(state.user));
        state.isplay = true;
      } else {
        // compare 값이 없으면 로그아웃 처리를 합니다.
        localStorage.removeItem("user");
        state.user = null;
        state.isplay = false;
        alert("정보를 다시 확인해 주세요");
      }
    },

    LOGOUT(state, action) {
      localStorage.removeItem("user");
      state.user = null;
      state.isplay = false;
    },
    userAdd(state, action) {
      if (state.user.pick === undefined) {
        state.user.pick = [];
      }
      state.user.pick.push(action.payload);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    playListAdd(state, action) {
      if (state.user.playList === undefined) {
        state.user.playList = [];
      }
      state.user.playList = [...action.payload];
      localStorage.setItem("user", JSON.stringify(state.user));
    },

    addMusicplay(state, action) {
      if (!state.user) {
        return alert("로그인 후 이용해주세요");
      }
      state.user.playmusic = [];
      state.user.playmusic.push(action.payload);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    // 플레이리스트 추가
    addplaylist(state, action) {
      if (!state.user) {
        return alert("로그인 후 이용해주세요");
      }

      state.user.playList.push(action.payload);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    allAddPlayList(state, action) {
      if (!state.user) {
        return alert("로그인 후 이용해주세요");
      }

      state.user.playList = state.user.playList.concat(...action.payload);
      state.user.playmusic = state.user.playList;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    // 플레이리스트 제거
    removeplaylist(state, action) {
      if (!state.user) {
        return alert("로그인 후 이용해주세요");
      }
      state.user.playList = state.user.playList.filter(
        (i) => i.name !== action.payload
      );
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    allremoveplaylist(state, action) {
      state.user.playList = [];
      state.user.playmusic = [];
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    addplayListMusic(state, action) {
      if (!state.user) {
        return alert("로그인 후 이용해주세요");
      }
      state.user.playmusic = [];
      state.selectedSong = [];
      state.user.playmusic = state.user.playmusic.concat(action.payload);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    playListandPlay(state, action) {
      if (action.payload !== undefined) {
        state.selectedSong = action.payload;
      }
    },
    randomPlayList(state, action) {
      if (state.user && state.user.playList) {
        state.user.playList = newrandomPlayList(state.user.playList);
        state.user.playmusic = state.user.playList;
        localStorage.setItem("user", JSON.stringify(state.user));
      }
    },
    AllRandomPlayList(state, action) {
      const newdata = newrandomPlayList(action.payload);
      state.user.playList = state.user.playList.concat(...newdata);
      state.user.playmusic = state.user.playList;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});
export const {
  changeInputID,
  changeInputPassword,
  loginOnSubmit,
  LOGOUT,
  userAdd,
  playListToggle,
  playListAdd,
  addMusicplay,
  addplayListMusic,
  addplaylist,
  removeplaylist,
  allremoveplaylist,
  allAddPlayList,
  playListandPlay,
  randomPlayList,
  AllRandomPlayList,
} = UserSlice.actions;
export default UserSlice.reducer;
