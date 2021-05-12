import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/characters">
        <span>Characters</span>
      </Link>
      <Link to="/comics">
        <span>Comics</span>
      </Link>
    </div>
  );
};

export default Header;
