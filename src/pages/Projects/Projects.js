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
      <h2 className="projectsPage-title">Here you can see my projects</h2>
      <i>*Projects description can be seen in the repos Readme</i>
      <br></br>
      <i>**Click on the row to highlight it</i>
      <FilterableProjectsTable projects={projects} />
      <div className="misc-container">
        <h3>Misc.</h3>
        <p>
          - There's also a simple To Do app which can be seen{" "}
          <Link to="/tasks">here</Link>.
        </p>
        <p>
          - And here is a form to add some text over the image (click the button
          to open it).
        </p>
        <button className="toggleImg-btn" onClick={handleImgToggle}>
          {!imgActive ? "Open" : "Close"}
        </button>
        {imgActive && (
          <>
            <p>
              You can put some text on the image using the <b>Edit text</b>{" "}
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
          .
        </p>
        <>
          <button className="toggleImg-btn" onClick={() => setOpenModal(true)}>
            Open
          </button>
          <Modal isOpen={openModal}>
            <Carousel />
            <button
              className="toggleImg-btn"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Close
            </button>
          </Modal>
          <h3>Other</h3>
          <p>
            I've added some more things made outside of the React documentation.
            You can check them <Link to="/other">here</Link>.
          </p>
        </>
      </div>
    </>
  );
}

export default Projects;
