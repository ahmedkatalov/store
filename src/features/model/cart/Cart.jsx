import { useSelector } from "react-redux";
import { CartFooter } from "../../../shared/model/CartFooter";
import { BackOnMAin } from "../../../shared/model/BackOnMAin";
import "@/features/model/cart/cart.css";
import "@/features/model/cart/styles/cartMedia.css";
import { RemoveButton } from "../../../shared/model/RemoveButton";
import { Link } from "react-router-dom";
import {CartCounter} from "@/features/model/CartCounter.jsx";
export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const extractPrice = (priceString) => {
    if(!priceString || typeof priceString !== 'string' ) {
      return 0
    }
    const numericValue = priceString.replace(/[^0-9.]/g, "");
    return parseFloat(numericValue);
  };

  return (
    <div>
      <BackOnMAin />
      {cartItems.length > 0 ? (
        <ul
          className="card-container"
          style={{
            display: "grid",
            gridTemplateColumns: "max-content",
          }}
        >
          {cartItems.map((item) => (
            <ul className="cart-card" key={item.id}>
              <img src={item.img} alt="" />
              <div className="cart-card-mid">
                <li key={item.id}>{item.name}</li>
                <li>
                  <span style={{ color: "#828282" }}>Итого:</span>{" "}
                  {extractPrice(item.price) * item.quantity} руб.
                </li>
              </div>
              <div className="cart-card-footer">
                {/* <RemoveButton item={item} /> */}
                <CartCounter itemId={item.id} />
                <Link to="/buy1">
                  <button id="buyBtn">Оплатить</button>
                </Link>
              </div>
            </ul>
          ))}
        </ul>
      ) : (
        <h1 style={{ textAlign: "center", color: "#000" }}>Корзина пуста :(</h1>
      )}
    </div>
  );
};
