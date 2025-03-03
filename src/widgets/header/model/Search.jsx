import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../../features/model/reducers/searchReducer";

export const Search = () => {
  const dispatch = useDispatch();

  const getInputChange = (event) => {
    const value = event.target.value;
    dispatch(setSearchQuery(value));
  };
  return (
    <div>
      <input
        type="search"
        placeholder="Поиск"
        id="search"
        onChange={getInputChange}
      />
    </div>
  );
};
