import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "@/features/model/auth/auth.css";
import { Header } from "../../../widgets/header/Header";

export const SignIn = () => {
  const [next, setNext] = useState(false);

  const refs = {
    telRef: useRef(),
    pasRef: useRef(),
  };

  const goNext = () => {
    refs.telRef.current.value && refs.pasRef.current.value
      ? setNext(true)
      : setNext(false);
  };

  return (
    <>
      <Header />
      <div className="auth-card-container">
        <h3>Вход в аккаунт</h3>
        <input
          type="tel"
          required
          placeholder="Телефон"
          ref={refs.telRef}
          onChange={goNext}
        />
        <input
          type="password"
          required
          placeholder="Пароль"
          ref={refs.pasRef}
          onChange={goNext}
        />
        <div className="auth-footer">
          <Link to="/signup">
            <button className="signup-button" onClick={goNext} disabled={!next}>
              Зарегистрироваться
            </button>
          </Link>
          <Link to="/accaunt">
            <button className="signin-button" onClick={goNext} disabled={!next}>
              Войти в аккаунт
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
