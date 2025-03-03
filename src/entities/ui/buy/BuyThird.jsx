import React from "react";
import { Link } from "react-router-dom";
import { NextBuy } from "../../../shared/model/NextBuy";
import { Header } from "../../../widgets/header/Header";

export const BuyThird = () => {
  return (
    <div>
      <Header />
      <div className="buy-container">
        <h2>Оплата и доставка</h2>
        <p className="fond">10% от стоимости Вашего заказа идут в фонд</p>
        <p>Способ оплаты:</p>
        <div className="oplata">
          <button>Наличными или картой при получении</button>
          <button>Оплата картой на сайте</button>
        </div>
        <label htmlFor="" className="condition-check">
          <input type="checkbox" name="" id="" />
          Оформляя заказ, я даю своё согласие на обработку персональных данных и
          подтверждаю ознакомление с договором-офертой.
        </label>
        <div className="buy-footer">
          <p>
            <span>Итого:</span>228 руб.
          </p>
          <Link to="/success">
            <NextBuy />
          </Link>
        </div>
      </div>
    </div>
  );
};
