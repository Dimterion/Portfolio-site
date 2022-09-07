import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <ul className="navbar-container">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/courses">Studies</Link>
      <Link to="/about">About</Link>
    </ul>
  );
}

export default Navbar;
