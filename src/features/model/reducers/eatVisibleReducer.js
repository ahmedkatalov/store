import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibleCount: 4,
  loading: false,
};
const eatVisibleReducer = createSlice({
  name: "eat",
  initialState,
  reducers: {
    setEatVisibleCount: (state) => {
      state.visibleCount += 4;
    },
    setEatLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setEatVisibleCount, setEatLoading } = eatVisibleReducer.actions;
export default eatVisibleReducer.reducer;
