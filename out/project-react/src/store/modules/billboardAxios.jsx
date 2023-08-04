import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  billboarddatas: [], // 빈 배열로 초기화
  billboardswiperarr: [],
  billboardRandomdata: [],
  loading: true,
  state: null,
};
export const billboarddata = createAsyncThunk(
  "billboarddata/billboarddata",
  async () => {
    try {
      const res = await axios.get(
        "https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json"
      );
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
);
const billboarddataslice = createSlice({
  name: "billboarddata",
  initialState,
  reducers: {
    billboardswiper(state, action) {
      let totalarr = [];
      let arr = [];
      state.billboarddatas.map((i, j) => {
        if (j % action.payload === 0 && j !== 0) {
          totalarr.push(arr);
          arr = [];
          arr.push(i);
        } else {
          if (state.billboarddatas.length - 1 === j) {
            arr.push(i);
            totalarr.push(arr);
            arr = [];
          } else {
            arr.push(i);
          }
        }
      });
      state.billboardswiperarr = totalarr;
    },
    billboardRandomdset(state) {
      const { billboarddatas } = state;
      // shuffleArray 함수 정의와 랜덤 데이터 생성
      function shuffleArray(array) {
        const shuffled = array.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      }
      const randomData = shuffleArray(billboarddatas).slice(0, 10);
      state.billboardRandomdata = randomData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(billboarddata.pending, (state, action) => {
        state.state = "로딩중";
        state.loading = true;
      })
      .addCase(billboarddata.fulfilled, (state, action) => {
        state.state = "성공";
        state.loading = false;
        state.billboarddatas = action.payload; // state.billboarddatas에 데이터 배열 할당
      })

      .addCase(billboarddata.rejected, (state, action) => {
        state.state = "실패";
        state.loading = true;
      });
  },
});
export const { billboardswiper, billboardRandomdset } =
  billboarddataslice.actions;
export default billboarddataslice.reducer;
