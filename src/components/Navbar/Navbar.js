import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <ul className="navbar-container">
      {pathname === "/" ? (
        <Link className="activeLink" to="/">
          Home
        </Link>
      ) : (
        <Link className="link" to="/">
          Home
        </Link>
      )}
      {pathname === "/projects" ? (
        <Link className="activeLink" to="/projects">
          Projects
        </Link>
      ) : (
        <Link className="link" to="/projects">
        Projects
        </Link>
      )}
      {pathname === "/studies" ? (
        <Link className="activeLink" to="/studies">
          Studies
        </Link>
      ) : (
        <Link className="link" to="/studies">
        Studies
        </Link>
      )}
      {pathname === "/about" ? (
        <Link className="activeLink" to="/about">
          About
        </Link>
      ) : (
        <Link className="link" to="/about">
        About
        </Link>
      )}
    </ul>
  );
}

export default Navbar;
