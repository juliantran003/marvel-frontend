import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img id="logo" src={logo} alt="" />
      </Link>
      <div>
        <Link to="/">HOME</Link>
        <Link to="/characters">CHARACTERS</Link>
        <Link to="/comics">COMICS</Link>
        <Link to="/favorites">FAVORITES</Link>
      </div>
    </div>
  );
};

export default Header;
