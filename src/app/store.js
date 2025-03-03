import { configureStore } from "@reduxjs/toolkit";
import birdVisibleReducer from "@/features/model/reducers/birdVisibleReducer.js";
import productVisibleReducer from "@/features/model/reducers/productVisibleReducer.js";
import eatVisibleReducer from "@/features/model/reducers/eatVisibleReducer.js";
import izbaVisibleReducer from "@/features/model/reducers/izbarVisibleReducer.js";
import cartReducer from "../features/model/reducers/cartReducer.js";
import cartCounterReducer from "../features/model/reducers/cartReducer.js";
import searchSlice from "../features/model/reducers/searchReducer.js";
const store = configureStore({
  reducer: {
    bird: birdVisibleReducer,
    product: productVisibleReducer,
    eat: eatVisibleReducer,
    izba: izbaVisibleReducer,
    search: searchSlice,
    counter: cartCounterReducer,
    cart: cartReducer,
  },
});

export default store;
