import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState();

  const navigate = useNavigate();
  const handleChange = (event) => {
    const selected = event.target.value;
    if (selected) {
      navigate(selected);
    }
  };

  return (
    <div className="navbar">
      <div className={`navbar ${isOpen ? "active" : ""}`}>
        <select name="" id="" onChange={handleChange}>
          <option value="/">Каталог</option>
          <option value="/mixes">Готовые миксы</option>
          <option value="/food">Отдельные виды кормов</option>
          <option value="/izba">Готовые комплекты</option>
        </select>
        <button>О проекте</button>
        <button>Птицы</button>
        <button>Пожертвования</button>
        <Link to="/cart">
          <img
            src="/public/assets/public api/Buy.svg"
            alt="cart"
            height={35}
            width={35}
          />
        </Link>
        <img
          src="/public/assets/public api/User.svg"
          alt="profile"
          height={35}
          width={35}
          style={{ transform: "translateX(4px)" }}
        />
      </div>
      <button className="burger-button" onClick={() => setIsOpen(!isOpen)}>
        <img
          src="/public/assets/public api/menu (1).png"
          alt=""
          height={40}
          width={40}
        />
      </button>
    </div>
  );
};
