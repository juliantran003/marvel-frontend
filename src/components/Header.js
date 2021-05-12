import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img id="logo" src={logo} alt="" />
      <Link to="/">HOME</Link>
      <Link to="/characters">CHARACTERS</Link>
      <Link to="/comics">COMICS</Link>
    </div>
  );
};

export default Header;
