import React, { useRef } from "react";

export const StatusButton = () => {
  const buttonRef = useRef();
  const handleStatus = () => {
    buttonRef.current.style.background = "#3FCF5E";
    buttonRef.current.textContent = "Отправлено";
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          color: "#BDBDBD",
          fontSize: ".9rem",
        }}
      >
        Статус:
      </p>
      <button
        onClick={handleStatus}
        ref={buttonRef}
        style={{
          background: "red",
          padding: ".8rem 2rem",
          color: "#fff",
        }}
      >
        Не отправлено
      </button>
    </div>
  );
};
