import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
    </ul>
  );
}

export default Navbar;
