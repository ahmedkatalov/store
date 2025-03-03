import { Cart } from "../../features/model/cart/Cart";
import { BackOnMAin } from "../../shared/model/BackOnMAin";
import { Header } from "../../widgets/header/Header";

export const AssemblyCart = () => {
  return (
    <div>
      <Header />
      <Cart />
    </div>
  );
};
