import { Link } from "react-router-dom";
import TabSwitcher from "../../components/TabSwitcher/TabSwitcher";
import Timer from "../../components/Timer/Timer";
import Quiz from "../../components/Quiz/Quiz";
import image from "../../assets/image_sea.jpg";
import "./home.css";

function Home() {
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
      <TabSwitcher
        tabs={[
          {
            id: 1,
            header: "Timer",
            content: <Timer />,
          },
          {
            id: 2,
            header: "Quiz",
            content: <Quiz />,
          },
        ]}
      />
    </div>
  );
}

export default Home;
