import { Link } from "react-router-dom";
import ApiInfo from "../../components/ApiInfo/ApiInfo";
import QuoteGenerator from "../../components/QuoteGenerator/QuoteGenerator";
import TextLoop from "../../components/TextLoop/TextLoop";
import "./other.css";

function Other() {
  return (
    <div>
      <QuoteGenerator />
      <ApiInfo />
      <TextLoop />
      <Link className="link other-link" to="/projects">
        Back to the projects page
      </Link>
      <Link className="link other-link" to="/jschallenges">
        Examples of the JavaScript coding challenges
      </Link>
    </div>
  );
}

export default Other;
