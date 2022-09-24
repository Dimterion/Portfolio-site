import { useContext } from "react";
import { AboutPageContext } from "../../context/Context";

function Heading({ children }) {
  const level = useContext(AboutPageContext);

  switch (level) {
    case 0:
      throw Error("Heading must be inside a section!");
    case 1:
      return <h2>{children}</h2>;
    case 2:
      return <p>{children}</p>;
    default:
      throw Error("Unknown level: " + level);
  }
}

export default Heading;
