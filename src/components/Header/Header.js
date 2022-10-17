import Avatar from "../Avatar/Avatar";
import Navbar from "../Navbar/Navbar";
import NetworkCheck from "../NetworkCheck/NetworkCheck";
import { formatDate } from "../../utils/formatDate";
import "./header.css";

function Header() {
  return (
    <>
      <header className="header-container">
        <Avatar />
        <h1>Dimterion's projects and studies</h1>
        <Navbar />
      </header>
      <div className="date-container">
        Today is: {formatDate()} <NetworkCheck />
      </div>
    </>
  );
}

export default Header;
