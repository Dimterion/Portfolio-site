import { useState, useEffect } from "react";
import ToDoApp from "../ToDoApp/ToDoApp";
import ToDoWithReducer from "../ToDoWithReducer/ToDoWithReducer";
import ToDoCombined from "../ToDoCombined/ToDoCombined";
import "./tasksDropdown.css";

function TasksDropdown() {
  const [app, setApp] = useState("To Do App made with State");
  const [tasks, setTasks] = useState(false);
  const [tasksWithReducer, setTasksWithReducer] = useState(false);
  const [tasksCombined, setTasksCombined] = useState(false);

  useEffect(() => {
    app === "To Do App made with State" ? setTasks(true) : setTasks(false);
    app === "To Do App made with Reducer"
      ? setTasksWithReducer(true)
      : setTasksWithReducer(false);
    app === "To Do App made with Reducer and Context"
      ? setTasksCombined(true)
      : setTasksCombined(false);
  }, [app]);

  return (
    <div className="tasksDropdown-container">
      <h3>{app}</h3>
      <label>
        Choose a version:{" "}
        <select value={app} onChange={(e) => setApp(e.target.value)}>
          <option value="To Do App made with State">State</option>
          <option value="To Do App made with Reducer">Reducer</option>
          <option value="To Do App made with Reducer and Context">
            Reducer & Context
          </option>
        </select>
        {tasks && <ToDoApp />}
        {tasksWithReducer && <ToDoWithReducer />}
        {tasksCombined && <ToDoCombined />}
      </label>
    </div>
  );
}

export default TasksDropdown;
