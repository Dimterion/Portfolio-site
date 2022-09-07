import { Link } from "react-router-dom";
import "./avatar.css";

function Avatar() {
  return (
    <Link to="/">
      <div className="avatar-container">
        <div className="hair-container"></div>
        <div className="eyes-container">
          <div className="left-eye"></div>
          <div className="glasses-line"></div>
          <div className="right-eye"></div>
        </div>
        <div className="nose-container"></div>
        <div className="beard-container"></div>
        <div className="mouth-container"></div>
      </div>
    </Link>
  );
}

export default Avatar;
