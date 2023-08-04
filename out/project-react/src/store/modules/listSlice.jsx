import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: { list: [], qna: [] },
  loading: true,
  status: "idle",
  randomUrls: [],
  searchTerm: "",
  filteredBySearch: [],
};
export const fetchData = createAsyncThunk("data/getData", async () => {
  try {
    const res = await axios.get(
      "https://gist.githubusercontent.com/jeonseoungil/8a42710b58bd531cc31d568cd24e1b39/raw/6eac68352c9e84b2dd2c31c2eb9add39137414e9/list.json"
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const searchList = createAsyncThunk("data/searchList", (searchTerm) => {
  return searchTerm;
});

const ListSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    changeInput(state, action) {
      state.searchTerm = action.payload;
    },
    Menu(state, action) {
      if (action.payload === "전체") {
        state.data.filtered1 = null;
        state.filteredBySearch = [];
      } else {
        state.data.filtered1 = state.data.list.filter(
          (item) => item.category === action.payload
        );
        state.randomUrls = state.data.list.filter(
          (item) => item.category === action.payload
        );
        state.randomUrls = [];
        state.filteredBySearch = [];
      }
    },
    Qna_Menu(state, action) {
      if (action.payload === "전체") {
        state.data.filtered2 = null;
      } else {
        state.data.filtered2 = state.data.qna.filter(
          (item) => item.category === action.payload
        );
      }
    },
    setRandomUrls: (state, action) => {
      state.randomUrls = [...state.randomUrls, ...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "error";
        state.loading = false;
      })
      .addCase(searchList.fulfilled, (state, action) => {
        const searchTerm = action.payload;
        if (!searchTerm) {
          state.filteredBySearch = state.data.filtered1 || state.data.list;
        } else {
          state.filteredBySearch = state.data.list.filter((item) =>
            item.title.includes(searchTerm)
          );
        }
      });
  },
});

export const { Menu, Qna_Menu, setRandomUrls, changeInput } = ListSlice.actions;
export default ListSlice.reducer;
