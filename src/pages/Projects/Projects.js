import { Link } from "react-router-dom";
import FilterableProjectsTable from "../../components/FilterableProjectsTable/FilterableProjectsTable";
import { projects } from "../../data/projects";
import "./projects.css";

function Projects() {
  return (
    <>
      <h2 className="projectsPage-title">Here you can see my projects</h2>
      <i>*Projects description can be seen in the repos Readme</i>
      <FilterableProjectsTable projects={projects} />
      <div className="misc-container">
        <h3>Misc.</h3>
        <p>
          There's also a simple To Do app which can be seen{" "}
          <Link to="/tasks">here</Link>.
        </p>
      </div>
    </>
  );
}

export default Projects;
