import { useState } from "react";
import { Link } from "react-router-dom";
import FilterableProjectsTable from "../../components/FilterableProjectsTable/FilterableProjectsTable";
import Form from "../../components/Form/Form";
import Modal from "../../components/Modal/Modal";
import Carousel from "../../components/Carousel/Carousel";
import { projects } from "../../data/projects";
import "./projects.css";

function Projects() {
  const [imgActive, setImgActive] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  function handleImgToggle() {
    setImgActive(!imgActive);
  }

  return (
    <>
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
          - A simple <Link to="/tasks">To Do App</Link> made in several versions
        </p>
        <p>- A form to add text for the image</p>
        <button className="toggleImg-btn" onClick={handleImgToggle}>
          {!imgActive ? "Open Form" : "Close Form"}
        </button>
        {imgActive && (
          <>
            <p>
              You can put some text for the image using the <b>Edit Text</b>{" "}
              button below it.
            </p>
            <Form />
          </>
        )}
        <p>
          - A carousel made with{" "}
          <a
            className="link"
            href="https://beta.reactjs.org/learn/manipulating-the-dom-with-refs"
            target="_blank"
            rel="noopener noreferrer"
          >
            useRef
          </a>
        </p>
        <>
          <button className="toggleImg-btn" onClick={() => setOpenModal(true)}>
            Open Carousel
          </button>
          <Modal isOpen={openModal}>
            <Carousel />
            <button
              className="toggleImg-btn"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Close Carousel
            </button>
          </Modal>
          <p>
            - <Link to="/other">Examples</Link> outside of the React docs
          </p>
        </>
      </div>
    </>
  );
}

export default Projects;
