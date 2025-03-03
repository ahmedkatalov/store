import React from "react";
import { izba } from "../../moks/izba";
import "@/shared/ui/izba/izba.css";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import { MoreButton } from "../MoreButton";
import { useLocation } from "react-router-dom";
import { CartFooter } from "../../model/CartFooter";
import { BackOnMAin } from "../../model/BackOnMAin";
import {
  setIzbaLoading,
  setVisibleCount,
} from "../../../features/model/reducers/izbarVisibleReducer";
export const Izba = () => {
  const dispatch = useDispatch();
  const visibleCount = useSelector((state) => state.izba.visibleCount);
  const loading = useSelector((state) => state.izba.loading);
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const location = useLocation();

  const showAllCard = location.pathname === "/izba";

  const filteredIzba = izba.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleMore = () => {
    dispatch(setIzbaLoading(true));
    setTimeout(() => {
      dispatch(setIzbaLoading(false));
      dispatch(setVisibleCount());
    }, 1400);
  };
  return (
    <div className="">
      {!searchQuery && (
        <div className="headCard">Кормушки {showAllCard && <BackOnMAin />}</div>
      )}
      {!showAllCard && visibleCount < filteredIzba.length && (
        <button onClick={handleMore} disabled={loading}>
          {loading ? <Spin /> : <MoreButton />}
        </button>
      )}
      <div className="card-container">
        {(showAllCard ? izba : filteredIzba.slice(0, visibleCount)).map(
          (item, id) => (
            <ul key={id} className="card">
              <img src={item.img} alt="izba" />
              <li>{item.name}</li>
              <li className="descriptions" style={{ fontSize: ".9rem" }}>
                {item.descriptions}
              </li>
              <li>{item.price}</li>
              <CartFooter item={item}/>
            </ul>
          ),
        )}
      </div>
    </div>
  );
};
