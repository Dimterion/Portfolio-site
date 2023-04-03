import { Link } from "react-router-dom";
import TasksDropdown from "../../components/TasksDropdown/TasksDropdown";
import "./tasks.css";

function Tasks() {
  return (
    <>
      <h2 className="tasks-header">To Do App</h2>
      <TasksDropdown />
      <Link className="tasks-link" to="/projects">
        {">>>"} Projects page
      </Link>
    </>
  );
}

export default Tasks;
