import ProjectCategoryRow from "../ProjectCategoryRow/ProjectCategoryRow";
import ProjectRow from "../ProjectRow/ProjectRow";

function ProjectTable({ projects }) {
  const rows = [];
  let lastCategory = null;

  projects.forEach((project) => {
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
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Build with</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProjectTable;
