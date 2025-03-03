import React, { useRef, useState } from "react";
import { Header } from "../../../widgets/header/Header";
import { Link } from "react-router-dom";
export const SignUp = () => {
  const [next, setNext] = useState(false);

  const refs = {
    telRef: useRef(),
    pasRef: useRef(),
  };

  const goNext = () => {
    refs.telRef.current.value || refs.pasRef.current.value
      ? setNext(true)
      : setNext(false);
  };

  return (
    <>
      <Header />
      <div className="auth-card-container">
        <h3>Регистрация</h3>
        <input type="tel" required placeholder="Телефон" ref={refs.telRef} />
        <input
          type="password"
          required
          placeholder="Пароль"
          ref={refs.pasRef}
        />
        <div className="auth-footer">
          <Link to="/signin">
            <button className="signup-button" onClick={goNext}>
              Войти в аккаунт
            </button>
          </Link>
          <Link to="/accaunt">
            <button className="signin-button" onClick={goNext}>
              Зарегистрироваться
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
