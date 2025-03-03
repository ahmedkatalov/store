import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibleCount: 4,
  loading: false,
};

const birdVisibleReducer = createSlice({
  name: "bird",
  initialState,
  reducers: {
    setBirdVisibleCount: (state) => {
      state.visibleCount += 4;
    },
    setBirdLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setBirdVisibleCount, setBirdLoading } =
  birdVisibleReducer.actions;
export default birdVisibleReducer.reducer;
