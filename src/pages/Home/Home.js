import { useState } from "react";
import { Link } from "react-router-dom";
import TabSwitcher from "../../components/TabSwitcher/TabSwitcher";
import Timer from "../../components/Timer/Timer";
import Quiz from "../../components/Quiz/Quiz";
import image from "../../assets/image_sea.jpg";
import "./home.css";

function Home() {
  const [toggle, setToggle] = useState(false);

  function toggleButtons() {
    setToggle(!toggle);
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
      <p className="homePage-text">
        <b>Note: </b>This site was built out of examples from{" "}
        <a
          className="link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Documentation
        </a>
        . I wanted to check them "in action" and for that made various
        components and inserted them throughout the pages. Thus, it's probably
        more of a sandbox for me. If you want to check my main profile, it's
        available{" "}
        <a
          className="link"
          href="https://dimterion.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
      <div className="homePage-buttons">
        <button className="tab-btn" onClick={() => toggleButtons()}>
          {!toggle ? "Timer & Quiz" : "Close"}
        </button>
        {toggle && (
          <TabSwitcher
            tabs={[
              {
                id: 1,
                header: "Quiz",
                content: <Quiz />,
              },
              {
                id: 2,
                header: "Timer",
                content: <Timer />,
              },
            ]}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
