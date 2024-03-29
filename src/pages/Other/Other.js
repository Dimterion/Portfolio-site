import { Link } from "react-router-dom";
import ApiInfo from "../../components/ApiInfo/ApiInfo";
import QuoteGenerator from "../../components/QuoteGenerator/QuoteGenerator";
import TextLoop from "../../components/TextLoop/TextLoop";
import "./other.css";

function Other() {
  return (
    <div className="page-loading">
      <QuoteGenerator />
      <ApiInfo />
      <TextLoop />
      <br></br>
      <br></br>
      <Link className="link other-link" to="/text-edit-form">
        {">>> "}Text Edit Form
      </Link>
      <br></br>
      <br></br>
      <Link className="link other-link" to="/dup-finder">
        {">>> "}Duplicate Words Finder
      </Link>
      <br></br>
      <br></br>
      <Link className="link other-link" to="/tenzies">
        {">>> "}Dice Game
      </Link>
      <br></br>
      <br></br>
      <Link className="link other-link" to="/projects">
        {">>> "}Projects page
      </Link>
    </div>
  );
}

export default Other;
