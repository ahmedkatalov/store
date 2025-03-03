import React, { useState } from "react";
import "@/widgets/header/styles/headerMedia.css";
import { Link } from "react-router-dom";
import { Popup } from "antd-mobile";
export const Profile = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <button onClick={() => setVisible(true)}>
        <img src="/public/assets/public api/Add User.svg" alt="" />
        <Popup
          visible={visible}
          onMaskClick={() => setVisible(false)}
          bodyStyle={{ background: "transparent" }}
          position="right"
        >
          <div className="authorization">
            <Link to="signin">
              <button className="sign-in">Войти в аккаунт</button>
            </Link>
            <Link to="signup">
              <button className="sign-up">Зарегистрироваться</button>
            </Link>
          </div>
        </Popup>
      </button>
    </div>
  );
};
