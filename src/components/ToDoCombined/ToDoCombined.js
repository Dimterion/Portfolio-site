import AddTask from "../../components/AddTaskCombined/AddTaskCombined";
import TaskListCombined from "../../components/TaskListCombined/TaskListCombined";
import { TasksProvider } from "../../context/Context";
import "./toDoCombined.css";

export default function ToDoCombined() {
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
            Reducer and Context
          </a>
        </h2>
        <AddTask />
        <TaskListCombined />{" "}
      </div>
    </TasksProvider>
  );
}
