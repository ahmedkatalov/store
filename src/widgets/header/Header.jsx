import "@/widgets/header/styles/headerMedia.css";
import "@/widgets/header/styles/header.css";
import { Actions } from "./ui/Actions";
import { Search } from "./model/Search";
import logo from "/public/assets/public api/logo.svg";
import { Navbar } from "./ui/Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="header-top">
        <Link to="/">
          <img src={logo} alt="logo" id="logo" />
        </Link>
        <Actions />
      </div>
      <div className="header-bottom">
        <Navbar />
        <Search />
      </div>
    </header>
  );
};
// d