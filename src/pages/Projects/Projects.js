import { useState } from "react";
import { Link } from "react-router-dom";
import FilterableProjectsTable from "../../components/FilterableProjectsTable/FilterableProjectsTable";
import Form from "../../components/Form/Form";
import Modal from "../../components/Modal/Modal";
import Carousel from "../../components/Carousel/Carousel";
import TabSwitcher from "../../components/TabSwitcher/TabSwitcher";
import Timer from "../../components/Timer/Timer";
import Quiz from "../../components/Quiz/Quiz";
import { projects } from "../../data/projects";
import "./projects.css";

function Projects() {
  const [imgActive, setImgActive] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [toggle, setToggle] = useState(false);

  function toggleButtons() {
    setToggle(!toggle);
  }

  function handleImgToggle() {
    setImgActive(!imgActive);
  }

  return (
    <div className="page-loading">
      <h2 className="projectsPage-title">Projects List</h2>
      <FilterableProjectsTable projects={projects} />
      <div className="projectsPage-notes">
        <i>* Projects descriptions can be seen in the repos Readme</i>
        <br></br>
        <i>** Click on the row to highlight it</i>
      </div>
      <div className="misc-container">
        <h3>Misc.</h3>
        <p>
          {">"}
          <Link to="/tasks">To Do App</Link>
        </p>
        <p>
          {">"}Picture form{" =>"}
          <button className="toggleImg-btn" onClick={handleImgToggle}>
            {!imgActive ? "Open Form" : "Close Form"}
          </button>
        </p>
        {imgActive && (
          <>
            <i>Add text for the image using the Edit Text button below.</i>
            <br></br>
            <br></br>
            <Form />
          </>
        )}
        <p>
          {">"}Image slider{" =>"}
          <button className="toggleImg-btn" onClick={() => setOpenModal(true)}>
            Open Slider
          </button>
        </p>
        <Modal isOpen={openModal}>
          <Carousel />
          <button
            className="toggleImg-btn"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Close Slider
          </button>
        </Modal>
        <div className="timerAndQuizButtons">
          <div className="timerAndQuiz-header">
            <p>
              {">"}Timer / Quiz {"=>"}
            </p>
            <button className="tab-btn" onClick={() => toggleButtons()}>
              {!toggle ? "Timer & Quiz" : "Close"}
            </button>
          </div>
          <div>
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
        <p>
          {">"}
          <Link to="/other">Other</Link>
        </p>
      </div>
    </div>
  );
}

export default Projects;
