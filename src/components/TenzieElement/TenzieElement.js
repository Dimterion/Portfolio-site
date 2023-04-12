import { nanoid } from "nanoid";
import "./tenzieElement.css";

function TenzieElement(props) {
  const dots = [];

  for (let i = 0; i < props.value; i++) {
    dots.push(<div key={nanoid()} className="dot"></div>);
  }

  return (
    <div
      className={props.isHeld ? "tenzieElement tenzieClicked" : "tenzieElement"}
      onClick={() => props.holdTenzie()}
    >
      {dots}
    </div>
  );
}

export default TenzieElement;
