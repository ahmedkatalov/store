import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./reducers/cartReducer";

export const CartCounter = ({ itemId }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartItem = cartItems.find((item) => item.id === itemId);
  const quantity = cartItem ? cartItem.quantity : 0;
  const disabled = quantity <= 1;

  return (
    <div className="counter-container">
      <p style={{ color: "#BDBDBD" }}>Количество:</p>
      <div className="counter-mid">
        <button
          className="counter"
          onClick={() => dispatch(decrement(itemId))}
          disabled={disabled}
        >
          -
        </button>
        <p>{quantity}</p>
        <button className="counter" onClick={() => dispatch(increment(itemId))}>
          +
        </button>
      </div>
    </div>
  );
};
