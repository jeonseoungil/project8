import { configureStore } from "@reduxjs/toolkit";
import kordata from "./modules/kordataAxios";
import billboarddata from "./modules/billboardAxios";
import dataReduer from "./modules/listSlice";
import userReduer from "./modules/UserSlice";
import SignUpReduer from "./modules/LoginSignUp";
import comment from "./modules/comment";

export const store = configureStore({
  reducer: {
    kordata,
    billboarddata,
    data: dataReduer,
    user: userReduer,
    signup: SignUpReduer,
    comment,
  },
});
