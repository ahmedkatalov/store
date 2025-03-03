import { useDispatch, useSelector } from "react-redux";
import { productCart } from "../../moks/productMoks";
import { Spin } from "antd";
import { MoreButton } from "../MoreButton";
import "@/shared/ui/productCard/product.css";
import { useLocation } from "react-router-dom";
import { CartFooter } from "../../model/CartFooter";
import { BackOnMAin } from "../../model/BackOnMAin";
import {
  setProductLoading,
  setProductVisibleCount,
} from "../../../features/model/reducers/productVisibleReducer";

export const ProductCard = () => {
  const dispatch = useDispatch();
  const visibleCount = useSelector((state) => state.product.visibleCount);
  const loading = useSelector((state) => state.product.loading);
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const location = useLocation();

  const showAllCard = location.pathname === "/mixes";

  const filteredProducts = productCart.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const handleLoadMore = () => {
    dispatch(setProductLoading(true));
    setTimeout(() => {
      dispatch(setProductVisibleCount());
      dispatch(setProductLoading(false));
    }, 1400);
  };

  return (
    <div className="">
      {!searchQuery && (
        <div className="headCard">
          Готовые миксы {showAllCard && <BackOnMAin />}
        </div>
      )}
      {!showAllCard && visibleCount < filteredProducts.length && (
        <button onClick={handleLoadMore} disabled={loading}>
          {loading ? <Spin /> : <MoreButton />}
        </button>
      )}
      <div className="card-container">
        {(showAllCard
          ? productCart
          : filteredProducts.slice(0, visibleCount)
        ).map((item, id) => (
          <ul key={id} className="card">
            <img src={item.img} alt="padovan" />
            <li>{item.name}</li>
            <span>{item.description}</span>
            <li>{item.price}</li>
            {item.gramms.map((gramm) => (
              <ul key={gramm.id} className="gramms">
                <li>{gramm.gramm1}</li>
                <li>{gramm.gramm2}</li>
                <li>{gramm.gramm3}</li>
                <li>{gramm.gramm4}</li>
              </ul>
            ))}
            <CartFooter item={item}/>
          </ul>
        ))}
      </div>
    </div>
  );
};
