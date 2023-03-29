import { useState, useEffect } from "react";
import ToDoApp from "../ToDoApp/ToDoApp";
import ToDoWithReducer from "../ToDoWithReducer/ToDoWithReducer";
import ToDoCombined from "../ToDoCombined/ToDoCombined";
import "./tasksDropdown.css";

function TasksDropdown() {
  const [app, setApp] = useState("Made with State");
  const [tasks, setTasks] = useState(false);
  const [tasksWithReducer, setTasksWithReducer] = useState(false);
  const [tasksCombined, setTasksCombined] = useState(false);

  useEffect(() => {
    app === "Made with State" ? setTasks(true) : setTasks(false);
    app === "Made with Reducer"
      ? setTasksWithReducer(true)
      : setTasksWithReducer(false);
    app === "Made with Reducer and Context"
      ? setTasksCombined(true)
      : setTasksCombined(false);
  }, [app]);

  return (
    <div className="tasksDropdown-container">
      <label>
        Choose a version:{" "}
        <select value={app} onChange={(e) => setApp(e.target.value)}>
          <option value="Made with State">State</option>
          <option value="Made with Reducer">Reducer</option>
          <option value="Made with Reducer and Context">
            Reducer & Context
          </option>
        </select>
        <h4>{app}</h4>
        {tasks && <ToDoApp />}
        {tasksWithReducer && <ToDoWithReducer />}
        {tasksCombined && <ToDoCombined />}
      </label>
    </div>
  );
}

export default TasksDropdown;
