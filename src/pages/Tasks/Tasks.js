import TasksDropdown from "../../components/TasksDropdown/TasksDropdown";
import "./tasks.css";

function Tasks() {
  return (
    <>
      <h2 className="tasks-header">A simple To Do app</h2>
      <TasksDropdown />
    </>
  );
}

export default Tasks;
