import { useState } from "react";
import "./projectRow.css";

function ProjectRow({ project }) {
  const [isActive, setIsActive] = useState(false);

  let rowClassname = "projectRow";

  if (isActive) {
    rowClassname += " projectRow-active";
  }

  const name = project.completed ? (
    `${project.name} ✔`
  ) : (
    <span style={{ color: "red " }}>{project.name}</span>
  );
  return (
    <tr
      className={rowClassname}
      onClick={(e) => {
        setIsActive(!isActive);
      }}
    >
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
