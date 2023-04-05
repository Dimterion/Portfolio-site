import { Link } from "react-router-dom";
import JSChallengesTextForm from "../../components/JSChallengesTextForm/JSChallengesTextForm";
import "./jsChallenges.css";

function JsChallenges() {
  return (
    <>
      <JSChallengesTextForm />
      <Link className="link other-link" to="/projects">
        {">>> "}Projects page
      </Link>
    </>
  );
}

export default JsChallenges;
