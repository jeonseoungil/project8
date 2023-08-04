import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem("comments")) || [
    { name: "SuperShy", text: "tqtqws", username: "qwe" },
  ],
};

const comment = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addcomment(state, action) {
      state.data = [...state.data, action.payload];
      localStorage.setItem("comments", JSON.stringify(state.data));
    },
    removecomment(state, action) {
      state.data = state.data.filter((i) => i.text !== action.payload.text);
      localStorage.setItem("comments", JSON.stringify(state.data));
    },
  },
});

export const { addcomment, removecomment } = comment.actions;
export default comment.reducer;
