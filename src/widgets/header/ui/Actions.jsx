import { Link } from "react-router-dom";
import { Profile } from "../model/Profile";
import vorobey from "../../../../public/assets/public api/bird.png"
export const Actions = () => {
  return (
    <div className="actions">
      <img
        src={vorobey}
        alt="phone"
        id="phone"
      />
      <div className="actions-bottom">
        <Link to="cart">
          <img
            src="/public/assets/public api/Buy.svg"
            alt="cart"
            height={35}
            width={35}
          />
        </Link>
        <Profile />
      </div>
    </div>
  );
};
