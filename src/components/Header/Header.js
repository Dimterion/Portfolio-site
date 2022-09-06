import Navbar from "../Navbar/Navbar";
import { formatDate } from "../../utils/utils";

function Header() {
  return (
    <div>
      <h1>This is my portfolio site</h1>
      <span>Today is {formatDate()}</span>
      <Navbar />
    </div>
  );
}

export default Header;
