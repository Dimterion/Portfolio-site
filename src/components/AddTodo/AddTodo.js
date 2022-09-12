import { useState } from "react";
import "./addTodo.css";

function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");

  return (
    <div className="addTodo-container">
      <input
        placeholder="Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle("");
          onAddTodo(title);
        }}
        disabled={title.length === 0}
      >
        Add task
      </button>
      {title.length === 0 && <span>Type a task to add.</span>}
    </div>
  );
}

export default AddTodo;
