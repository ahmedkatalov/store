import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/model/reducers/cartReducer";

export const CartButton = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };
  return (
    <div
      style={{
        background: "transparent",
      }}
    >
      <button
        onClick={handleAddToCart}
        style={{
          cursor: "pointer",
        }}
      >
        <img
           src="/public/assets/public api/Buy.svg"
          alt="cart"
          style={{
            background: "transparent",
            height: "40px",
            width: "45px",
          }}
        />
      </button>
    </div>
  );
};
