import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../../widgets/header/Header";

export const Success = () => {
  return (
    <>
      <Header />
      <div className="success">
        <h1>Заказ успешно оформлен</h1>
        <Link to="/condition">
          <button>Спасибо!</button>
        </Link>
        
      </div>
    </>
  );
};
