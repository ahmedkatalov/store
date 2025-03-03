import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibleCount: 4,
  loading: false,
};

const ProductVisibleReducer = createSlice({
  name: "more",
  initialState,
  reducers: {
    setProductVisibleCount: (state) => {
      state.visibleCount += 4;
    },
    setProductLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setProductVisibleCount, setProductLoading } =
  ProductVisibleReducer.actions;
export default ProductVisibleReducer.reducer;
