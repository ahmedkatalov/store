import React from "react";
import { user } from "../../../shared/moks/user";
import "@/features/model/accaunt/accaunt.css";
export const Accaunt = () => {
  return (
    <div>
      {user.map((item, id) => (
        <ul key={id} className="accaunt">
          <div className="acc-top">
            <img src={item.img} alt="user" />
            <div className="acc-right">
              <li>{item.name}</li>
              <li>{item.email}</li>
            </div>
          </div>
          <li className="address">{item.address}</li>
        </ul>
      ))}
    </div>
  );
};
