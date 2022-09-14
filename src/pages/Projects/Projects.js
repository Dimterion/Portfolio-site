import { Link } from "react-router-dom";
import FilterableProjectsTable from "../../components/FilterableProjectsTable/FilterableProjectsTable";
import Form from "../../components/Form/Form";
import { projects } from "../../data/projects";
import "./projects.css";

function Projects() {
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
          There's also a simple To Do app which can be seen{" "}
          <Link to="/tasks">here</Link>.
        </p>
        <p>
          And here is a image over which you can put some text using the{" "}
          <b>Edit phrase</b> button below it.
        </p>
        <Form />
      </div>
    </>
  );
}

export default Projects;
