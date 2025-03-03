export const MoreButton = () => {
  return (
    <div className="more">
      <button
        style={{
          color: "#219653",
          fontSize: "1.1rem",
          fontWeight: "500",
          cursor: "pointer",
        }}
      >
        Ещё
      </button>
      <img
        src="/public/assets/public api/more.svg"
        alt=""
        style={{
          height: "50",
          width: "50",
        }}
      />
    </div>
  );
};
