import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  kodata: [],
  korswiper: [],
  randomdata: [],
  loading: true,
  state: null,
};
export const kordata = createAsyncThunk("kordeta/kordata", async () => {
  try {
    const res = await axios.get(
      `https://gist.githubusercontent.com/Jabchoking/89b047ed80935a36b3dd476b04a541ab/raw/547b20392ab8d1c5d9e8f2c12dbbea1f283dffaf/gistfile1.txt`
    );
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
});
const kordataslice = createSlice({
  name: "kordata",
  initialState,
  reducers: {
    useswiper(state, action) {
      let totalarr = [];
      let arr = [];
      state.kodata.map((i, j) => {
        if (j % action.payload === 0 && j !== 0) {
          totalarr.push(arr);
          arr = [];
          arr.push(i);
        } else {
          if (state.kodata.length - 1 === j) {
            arr.push(i);
            totalarr.push(arr);
            arr = [];
          } else {
            arr.push(i);
          }
        }
      });
      state.korswiper = totalarr;
    },
    randomset(state) {
      const { kodata } = state;

      // shuffleArray 함수 정의와 랜덤 데이터 생성
      function shuffleArray(array) {
        const shuffled = array.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      }

      const randomData = shuffleArray(kodata).slice(0, 10);
      state.randomdata = randomData;
    },
  },
  extraReducers: (bulider) => {
    bulider
      .addCase(kordata.pending, (state, action) => {
        state.state = "로딩중";
        state.loading = true;
      })
      .addCase(kordata.fulfilled, (state, action) => {
        state.state = "성공";
        state.loading = false;
        state.kodata = action.payload;
      })
      .addCase(kordata.rejected, (state, action) => {
        state.state = "실패";
        state.loading = true;
      });
  },
});

export const { useswiper, randomset } = kordataslice.actions;
export default kordataslice.reducer;
