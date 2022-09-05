import "./projectCategoryRow.css";

function ProjectCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="4">{category}</th>
    </tr>
  );
}

export default ProjectCategoryRow;
