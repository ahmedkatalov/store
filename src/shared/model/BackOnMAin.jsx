import React from "react";
import { Link } from "react-router-dom";

export const BackOnMAin = () => {
  return (
    <div>
      <button
        style={{
          padding: "1rem",
        }}
      >
        <Link to="/" id="backLink">
          Назад
        </Link>
      </button>
    </div>
  );
};
