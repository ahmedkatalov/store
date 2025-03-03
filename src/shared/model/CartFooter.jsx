import React from "react";
import { DetailedButton } from "./DetailedButton";
import { CartButton } from "./CartButton";
import { useLocation } from "react-router-dom";
import { RemoveButton } from "./RemoveButton";

export const CartFooter = ({ item }) => { 
  const location = useLocation();
  const cartButton = location.pathname === "/cart";
  return (
    <div>
      <div
        className="card-footer"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <DetailedButton />
        {cartButton ? <RemoveButton item={item} /> : <CartButton item={item} />}
      </div>
    </div>
  );
};