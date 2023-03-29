import { Link } from "react-router-dom";
import TasksDropdown from "../../components/TasksDropdown/TasksDropdown";
import "./tasks.css";

function Tasks() {
  return (
    <>
      <h2 className="tasks-header">A Simple To Do App</h2>
      <TasksDropdown />
      <Link className="tasks-link" to="/projects">
        Back to the projects page
      </Link>
    </>
  );
}

export default Tasks;
