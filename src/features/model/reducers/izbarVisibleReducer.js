import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibleCount: 4,
  loading: false,
};

const izbaVisibleReducer = createSlice({
  name: "izba",
  initialState,
  reducers: {
    setVisibleCount: (state) => {
      state.visibleCount += 4;
    },
    setIzbaLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setVisibleCount, setIzbaLoading } = izbaVisibleReducer.actions;
export default izbaVisibleReducer.reducer;
