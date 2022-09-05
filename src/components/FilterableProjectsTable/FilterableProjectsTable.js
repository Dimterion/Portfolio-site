import { useState } from "react";
import ProjectTable from "../ProjectTable/ProjectTable";
import SearchBar from "../SearchBar/SearchBar";
import "./filterableProjectsTable.css";

function FilterableProjectsTable({ projects }) {
  const [filterText, setFilterText] = useState("");
  const [completed, setCompleted] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        completed={completed}
        onFilterTextChange={setFilterText}
        onCompletedChange={setCompleted}
      />
      <ProjectTable
        projects={projects}
        filterText={filterText}
        completed={completed}
      />
    </div>
  );
}

export default FilterableProjectsTable;
