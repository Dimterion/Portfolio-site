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
    </tr>
  );
}

export default ProjectRow;
