import Avatar from "../Avatar/Avatar";
import Navbar from "../Navbar/Navbar";
import { formatDate } from "../../utils/utils";
import "./header.css";

function Header() {
  return (
    <>
      <header className="header-container">
        <Avatar />
        <h1>Dimterion's projects and studies</h1>
        <Navbar />
      </header>
      <p className="date-container">Today is: {formatDate()}</p>
    </>
  );
}

export default Header;
