import React from "react";
import { katalog } from "../../shared/moks/katalog";
import "@/widgets/katalog/katalog.css";
import { DetailedButton } from "../../shared/model/DetailedButton";
import { useSelector } from "react-redux";

export const Katalog = () => {
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const filteredKatalog = katalog.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <div className="katalog-container">
      {filteredKatalog.map((item, id) => (
        <ul key={id} className="card">
          <img src={item.img} alt="" />
          <li>{item.name}</li>
          <li className="description" style={{ fontSize: ".9rem" }}>
            {item.descriptions}
          </li>
          <DetailedButton />
        </ul>
      ))}
    </div>
  );
};
// {item.descriptions2 && <li className='description' style={{fontSize: '.9rem'}}>{item.descriptions2}</li>}
