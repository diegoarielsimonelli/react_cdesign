import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="Navigation">
      <ul>
        <Link className="Link" activeClassName="active" exact to="/">
          Home
        </Link>
        <Link className="Link" activeClassName="active" to="/contact">
          Contact
        </Link>
        <Link className="Link" activeClassName="active" to="/about">
          About
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
