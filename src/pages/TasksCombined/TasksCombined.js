import { Link } from "react-router-dom";
import AddTask from "../../components/AddTaskCombined/AddTaskCombined";
import TaskList from "../../components/TaskListCombined/TaskListCombined";
import { TasksProvider } from "../../context/Context";
import "./tasksCombined.css";

export default function TaskApp() {
  return (
    <TasksProvider>
      <div className="tasksCombined-container">
        <h2>
          Here is a simple ToDo app that uses React{" "}
          <a
            className="link"
            href="https://beta.reactjs.org/learn/scaling-up-with-reducer-and-context"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reducer and Context combined
          </a>
        </h2>
        <AddTask />
        <TaskList />{" "}
        <Link className="link" to="/tasks">
          Go back to the previous version
        </Link>
      </div>
    </TasksProvider>
  );
}
