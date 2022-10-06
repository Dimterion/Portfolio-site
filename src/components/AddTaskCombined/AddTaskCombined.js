import { useState } from "react";
import { useTasksDispatch } from "../../context/Context";
import "./addTaskCombined.css";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();
  return (
    <>
      <input
        className="addTaskCombined-input"
        placeholder="Add task"
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
        Add
      </button>
      {text.length === 0 && <span>Type a task to add.</span>}
    </>
  );
}

let nextId = 1;
