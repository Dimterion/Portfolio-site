import "./projectRow.css";

function ProjectRow({ project }) {
  const name = project.completed ? (
    `${project.name} ✔`
  ) : (
    <span style={{ color: "red " }}>{project.name}</span>
  );
  return (
    <tr className="projectRow">
      <td>{name}</td>
      <td>{project.technology}</td>
      <td>
        {project.demo !== "" ? (
          <a target="_blank" rel="noopener noreferrer" href={project.demo}>
            Demo link
          </a>
        ) : (
          <span>N/A</span>
        )}
      </td>
      <td>
        <a target="_blank" rel="noopener noreferrer" href={project.repo}>
          Repo link
        </a>
      </td>
    </tr>
  );
}

export default ProjectRow;
