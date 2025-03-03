import "@/widgets/footer/style/footer.css";
import "@/widgets/footer/style/mediaFooter.css";
export const AssemblyFooter = () => {
  return (
    <div className="footer">
      <div className="left">
        <span>Оплата</span>
        <span>Доставка</span>
      </div>
      <div className="">
        <img src="src/shared/assets/public api/social.png" alt="" />
      </div>
      <div className="">8 920 999 43 50</div>
    </div>
  );
};
