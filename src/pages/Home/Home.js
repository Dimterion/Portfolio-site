import { useState } from "react";
import { Link } from "react-router-dom";
import Quiz from "../../components/Quiz/Quiz";
import image from "../../assets/image_sea.jpg";
import "./home.css";

function Home() {
  const [quiz, setQuiz] = useState(false);

  function handleQuiz() {
    setQuiz(!quiz);
  }

  return (
    <div className="home-container">
      <img
        className="homePage-image"
        src={image}
        alt="Sea and cliffs at the north of France"
      />
      <p className="homePage-text">
        You can check my{" "}
        <Link className="link" to="/projects">
          projects
        </Link>{" "}
        or completed{" "}
        <Link className="link" to="/studies">
          courses
        </Link>{" "}
        in the appropriate sections. Meanwhile, take a look at some of the
        Normandy's beauties.
      </p>
      <h4>Want to see a tiny quiz?</h4>
      <button className="quiz-button" onClick={handleQuiz}>{!quiz ? "Sure" : "Changed my mind"}</button>
      {quiz && <Quiz />}
    </div>
  );
}

export default Home;
