import { Link } from "react-router-dom";
import TasksDropdown from "../../components/TasksDropdown/TasksDropdown";
import "./tasks.css";

function Tasks() {
  return (
    <div className="page-loading">
      <h2 className="tasks-header">To Do App</h2>
      <TasksDropdown />
      <Link className="tasks-link" to="/projects">
        {">>>"} Projects page
      </Link>
    </div>
  );
}

export default Tasks;
