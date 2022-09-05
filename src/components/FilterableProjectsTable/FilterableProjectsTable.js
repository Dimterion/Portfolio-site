import ProjectTable from "../ProjectTable/ProjectTable";
import SearchBar from "../SearchBar/SearchBar";

function FilterableProjectsTable({ projects }) {
  return (
    <div>
      <SearchBar />
      <ProjectTable projects={projects} />
    </div>
  );
}

export default FilterableProjectsTable;
