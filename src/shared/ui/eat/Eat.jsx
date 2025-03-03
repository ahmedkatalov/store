import { eat } from "../../moks/eat";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import { MoreButton } from "../MoreButton";
import { DetailedButton } from "../../model/DetailedButton";
import { useLocation } from "react-router-dom";
import { CartFooter } from "../../model/CartFooter";
import { BackOnMAin } from "../../model/BackOnMAin";
import {
  setEatLoading,
  setEatVisibleCount,
} from "../../../features/model/reducers/eatVisibleReducer";
export const Eat = () => {
  const dispatch = useDispatch();
  const visibleCount = useSelector((state) => state.eat.visibleCount);
  const loading = useSelector((state) => state.eat.loading);
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const location = useLocation();

  const showAllCard = location.pathname === "/food";

  const filteredEat = eat.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleMore = () => {
    dispatch(setEatLoading(true));
    setTimeout(() => {
      dispatch(setEatVisibleCount());
      dispatch(setEatLoading(false));
    }, 1400);
  };

  return (
    <div className="">
      {!searchQuery && (
        <div className="headCard">Зёрна{showAllCard && <BackOnMAin />}</div>
      )}
      {!showAllCard && visibleCount < filteredEat.length && (
        <button onClick={handleMore} disabled={loading}>
          {loading ? <Spin /> : <MoreButton />}
        </button>
      )}
      <div className="card-container">
        {(showAllCard ? eat : filteredEat.slice(0, visibleCount)).map(
          (item, id) => (
            <ul key={id} className="card">
              <img src={item.img} alt="food" />
              <li>{item.name}</li>
              <li className="descriptions" style={{ fontSize: ".9rem" }}>
                {item.descriptions}
              </li>
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
          ),
        )}
      </div>
    </div>
  );
};
