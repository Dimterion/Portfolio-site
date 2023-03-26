import Avatar from "../Avatar/Avatar";
import Navbar from "../Navbar/Navbar";
import Clock from "../Clock/Clock";
import NetworkCheck from "../NetworkCheck/NetworkCheck";
import { formatDate } from "../../utils/formatDate";
import "./header.css";

function Header() {
  return (
    <>
      <header className="header-container">
        <Avatar />
        <div>
          <h1>Dimterion's Projects & Studies</h1>
          <div className="date-container">
            <span>Today is: {formatDate()}</span>
            <Clock />
            <NetworkCheck />
          </div>
        </div>
        <Navbar />
      </header>
    </>
  );
}

export default Header;
