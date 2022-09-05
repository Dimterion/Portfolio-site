function ProjectRow({ project }) {
  const name = project.completed ? (
    project.name
  ) : (
    <span style={{ color: "red " }}>{project.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{project.technology}</td>
      <td>
        <a href={project.demo}>Demo</a>
      </td>
      <td>
        <a href={project.repo}>Repo</a>
      </td>
    </tr>
  );
}

export default ProjectRow;
