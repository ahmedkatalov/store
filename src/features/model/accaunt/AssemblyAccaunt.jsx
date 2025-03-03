import React from "react";
import { Header } from "../../../widgets/header/Header";
import { Accaunt } from "./Accaunt";
import { Cart } from "../cart/Cart";
import { Link } from "react-router-dom";

export const AssemblyAccaunt = () => {
  return (
    <div>
      <Header />
      <div className="acc-mid">
        <Accaunt />
        <div className="cart-acc">
          <Cart />
          <Link to="/buy1">
            <button className="buy">Оплатить</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
