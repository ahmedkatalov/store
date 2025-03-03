import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};
const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
    },
    increment: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload,
      );
      if (itemInCart) {
        itemInCart.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload,
      );
      if (itemInCart && itemInCart.quantity > 1) {
        itemInCart.quantity -= 1;
      } else if (itemInCart && itemInCart.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload,
        );
      }
    },
  },
});

export const { addToCart, remove, increment, decrement } = cartReducer.actions;
export default cartReducer.reducer;
