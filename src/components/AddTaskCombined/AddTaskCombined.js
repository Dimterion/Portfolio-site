import { useState } from "react";
import { useTasksDispatch } from "../../context/Context";
import "./addTaskCombined.css";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();
  return (
    <div className="addTaskCombined-container">
      <input
        className="addTaskCombined-input"
        placeholder="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="addTaskCombined-btn"
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
        disabled={text.length === 0}
      >
        Add Task
      </button>
      {text.length === 0 && <span>Type a task to add.</span>}
    </div>
  );
}

let nextId = 1;
