import ProjectCategoryRow from "../ProjectCategoryRow/ProjectCategoryRow";
import ProjectRow from "../ProjectRow/ProjectRow";
import "./projectTable.css";

function ProjectTable({ projects, filterText, completed }) {
  const rows = [];
  let lastCategory = null;

  projects.forEach((project) => {
    if (project.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    if (completed && !project.completed) {
      return;
    }

    if (project.category !== lastCategory) {
      rows.push(
        <ProjectCategoryRow
          category={project.category}
          key={project.category}
        />
      );
    }

    rows.push(<ProjectRow project={project} key={project.name} />);
    lastCategory = project.category;
  });

  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>Name</th>
          <th>Build with</th>
          <th>Live demo</th>
          <th>Repo</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProjectTable;
