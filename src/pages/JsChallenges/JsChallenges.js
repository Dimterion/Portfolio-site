import { Link } from "react-router-dom";
import JSChallengesTextForm from "../../components/JSChallengesTextForm/JSChallengesTextForm";
import "./jsChallenges.css";

function JsChallenges() {
  return (
    <div className="page-loading">
      <JSChallengesTextForm />
      <Link className="link other-link" to="/projects">
        {">>> "}Projects page
      </Link>
    </div>
  );
}

export default JsChallenges;
