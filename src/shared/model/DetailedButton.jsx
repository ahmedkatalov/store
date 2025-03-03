import { Link } from "react-router-dom";

export const DetailedButton = () => {
  return (
    <div>
      <Link to="/detail">
        <button
          style={{
            background: "#3FCF5E",
            borderRadius: ".8rem",
            color: "#fff",
            fontSize: "1.1rem",
            padding: ".8rem 1.2rem",
          }}
        >
          Подробнее
        </button>
      </Link>
    </div>
  );
};
