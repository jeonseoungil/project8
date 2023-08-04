import { createSlice } from "@reduxjs/toolkit";
const localDataSign = localStorage.getItem("sign");
const localDataNewSignUp = localStorage.getItem("newSignUpData");
const initialState = {
  sign: localDataSign ? JSON.parse(localDataSign) : [],
  chked1: false,
  chked2: false,
  chked3: false,
  chked4: false,
  chked5: false,
  totalChked: false,
  UserID: "",
  UserPassword: "",
  eMail: "",
  phone: "",
  eMail_select: "",
  repassword: "",
  newSignUpData: localDataNewSignUp ? JSON.parse(localDataNewSignUp) : [],
};
export const LoginSignUpSlice = createSlice({
  name: "sign",
  initialState,
  reducers: {
    changeChked1(state, action) {
      state.chked1 = !state.chked1;
    },
    changeChked2(state, action) {
      state.chked2 = !state.chked2;
    },
    changeChked3(state, action) {
      state.chked3 = !state.chked3;
    },
    changeChked4(state, action) {
      state.chked4 = !state.chked4;
    },
    changeChked5(state, action) {
      state.chked5 = !state.chked5;
    },
    changetotal(state, action) {
      state.totalChked = !state.totalChked;
      if (state.totalChked) {
        state.chked1 = true;
        state.chked2 = true;
        state.chked3 = true;
        state.chked4 = true;
        state.chked5 = true;
      }
      if (!state.totalChked) {
        state.chked1 = false;
        state.chked2 = false;
        state.chked3 = false;
        state.chked4 = false;
        state.chked5 = false;
      }
    },
    onchkedsubmit(state, action) {
      if (state.chked1 && state.chked2 && state.chked3) {
        localStorage.setItem("sign", JSON.stringify(state.sign));
      } else {
        alert("필수 약관에 동의해야 회원가입이 가능합니다.");
      }
    },
    changeUSERID(state, action) {
      state.UserID = action.payload;
    },
    changePASSWORD(state, action) {
      state.UserPassword = action.payload;
    },
    changeEMAIL(state, action) {
      state.eMail = action.payload;
    },
    changePHONE(state, action) {
      state.phone = action.payload;
    },
    chingeselect(state, action) {
      state.eMail_select = action.payload;
    },
    chingeREPASSWORD(state, action) {
      state.repassword = action.payload;
    },
    onSignUpSubmit(state, action) {
      if (
        state.UserID &&
        state.UserPassword &&
        state.eMail &&
        state.phone &&
        state.eMail_select &&
        state.UserPassword === state.repassword
      ) {
        const newSignUpData = {
          UserID: state.UserID,
          UserPassword: state.UserPassword,
          eMail: state.eMail,
          phone: state.phone,
          eMail_select: state.eMail_select,
          chked1: state.chked1,
          chked2: state.chked2,
          chked3: state.chked3,
          chked4: state.chked4,
          chked5: state.chked5,
        };
        state.sign = [newSignUpData];
        localStorage.setItem("sign", JSON.stringify(state.sign));
        const updatedNewSignUpData = [...state.newSignUpData, newSignUpData];
        localStorage.setItem(
          "newSignUpData",
          JSON.stringify(updatedNewSignUpData)
        );
        state.newSignUpData = updatedNewSignUpData;

        (state.chked1 = false),
          (state.chked2 = false),
          (state.chked3 = false),
          (state.chked4 = false),
          (state.chked5 = false),
          (state.totalChked = false);
        (state.UserID = ""),
          (state.UserPassword = ""),
          (state.repassword = ""),
          (state.eMail = ""),
          (state.phone = ""),
          (state.eMail_select = "");
      } else {
        alert("정보를 다시 확인해주세요");
      }
    },
    loggout(state, action) {
      const user = action.payload; // 현재 로그인 중인 사용자 정보를 가져옴

      const updatedNewSignUpData = state.newSignUpData.map((item) =>
        item.UserID === user.login_UserID &&
        item.UserPassword === user.login_UserPassword
          ? {
              ...item,
              user: {
                pick: user.pick || [],
                playList: user.playList || [],
                playmusic: user.playmusic || [],
              },
            }
          : item
      );

      localStorage.setItem(
        "newSignUpData",
        JSON.stringify(updatedNewSignUpData)
      );
      state.newSignUpData = updatedNewSignUpData; // 상태를 업데이트함
    },
  },
});
export const {
  changeChked1,
  changeChked2,
  changeChked3,
  changeChked4,
  changeChked5,
  onchkedsubmit,
  changeUSERID,
  changePASSWORD,
  changeEMAIL,
  changePHONE,
  onSignUpSubmit,
  chingeselect,
  chingeREPASSWORD,
  changetotal,
  loggout,
} = LoginSignUpSlice.actions;

export default LoginSignUpSlice.reducer;
