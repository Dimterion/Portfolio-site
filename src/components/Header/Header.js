import Avatar from "../Avatar/Avatar";
import Navbar from "../Navbar/Navbar";
import { formatDate } from "../../utils/utils";
import "./header.css";

function Header() {
  return (
    <>
      <div className="header-container">
        <Avatar />
        <h1>Dimterion's portfolio</h1>
        <Navbar />
      </div>
      <p className="date-container">Today is: {formatDate()}</p>
    </>
  );
}

export default Header;
