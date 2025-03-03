import { Link } from "react-router-dom";
import { Profile } from "../model/Profile";
export const Actions = () => {
  return (
    <div className="actions">
      <img
        src="src/shared/assets/public api/phone.png"
        alt="phone"
        id="phone"
      />
      <div className="actions-bottom">
        <Link to="cart">
          <img
            src="src/shared/assets/public api/Buy.svg"
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
