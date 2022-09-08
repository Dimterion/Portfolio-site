import FilterableProjectsTable from "../../components/FilterableProjectsTable/FilterableProjectsTable";
import { projects } from "../../data/projects";
import "./projects.css";

function Projects() {
  return (
    <>
      <h2 className="projectsPage-title">
        Here you can see my projects
      </h2>
      <FilterableProjectsTable projects={projects} />
    </>
  );
}

export default Projects;
