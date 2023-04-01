import { Link } from "react-router-dom";
import JSChallengesTextForm from "../../components/JSChallengesTextForm/JSChallengesTextForm";
import "./jsChallenges.css";

function JsChallenges() {
  return (
    <>
      <h2 className="jsChallenges-h2">
        Examples of using various JavaScript methods
      </h2>
      <JSChallengesTextForm />
      <Link className="link other-link" to="/projects">
        Other projects
      </Link>
    </>
  );
}

export default JsChallenges;
