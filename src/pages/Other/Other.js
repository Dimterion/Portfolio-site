import { Link } from "react-router-dom";
import ApiInfo from "../../components/ApiInfo/ApiInfo";
import QuoteGenerator from "../../components/QuoteGenerator/QuoteGenerator";
import "./other.css";

function Other() {
  return (
    <div>
      <QuoteGenerator />
      <ApiInfo />
      <Link className="link other-link" to="/projects">
        Back to the projects page
      </Link>
    </div>
  );
}

export default Other;
