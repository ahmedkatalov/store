import React from "react";
import { Header } from "../../../widgets/header/Header";
import { BackOnMAin } from "../../../shared/model/BackOnMAin";
import { productCart } from "../../../shared/moks/productMoks";
import "@/pages/model/detailedpage/styles/detail.css";
import { Link } from "react-router-dom";
import {CartCounter} from "@/features/model/CartCounter.jsx"
import { addToCart } from "../../../features/model/reducers/cartReducer";
import { useDispatch, useSelector } from "react-redux";

export const DetailedPage = ({ item }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
  const quantity = cartItem ? cartItem.quantity : 1;

  const extractPrice = (priceString) => {
    const numericValue = priceString.replace(/[^0-9.]/g, "");
    return parseFloat(numericValue);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      <Header />
      <BackOnMAin />

      {productCart.slice(0, 1).map((item, id) => (
        <ul key={id} className="detail-container">
          <img src={item.img} alt="" />
          <div className="detail-right">
            <h1>{item.name}</h1>
            <li style={{ fontSize: "1.1rem" }}>{item.detail}</li>
            {item.gramms.map((gramm, index) => (
              <ul key={index} className="gramms">
                <li>{gramm.gramm1}</li>
                <li>{gramm.gramm2}</li>
                <li>{gramm.gramm3}</li>
                <li>{gramm.gramm4}</li>
              </ul>
            ))}
            <li>
              <span style={{ color: "#828282" }}>Итого:</span>{" "}
              {extractPrice(item.price) * quantity} руб.
            </li>
            <CartCounter itemId={item.id} />
            <div className="detail-footer">
              <Link to="/buy1">
                <button className="buyDetail">Купить</button>
              </Link>
              <button className="addToCart" onClick={handleAddToCart}>
                Добавить в корзину
              </button>
            </div>
          </div>
        </ul>
      ))}
    </div>
  );
};
