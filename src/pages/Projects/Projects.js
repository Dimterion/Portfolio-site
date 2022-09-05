import FilterableProjectsTable from "../../components/FilterableProjectsTable/FilterableProjectsTable";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <>
      <h2>Here you can see a list of my projects</h2>
      <FilterableProjectsTable projects={projects} />
    </>
  );
}

export default Projects;
