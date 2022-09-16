import { useState } from "react";
import "./taskList.css";

function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  let completedTasks = 0;
  todos.map((todo) => {
    if (todo.done) {
      completedTasks = completedTasks + 1;
    }
    return completedTasks;
  });

  return (
    <>
      {todos.length === 0 ? (
        <h4>You have no tasks</h4>
      ) : (
        <h4>
          You have {completedTasks} completed{" "}
          {completedTasks === 1 ? "task" : "tasks"} out of {todos.length}{" "}
          {todos.length === 1 ? "task" : "tasks"} in total
        </h4>
      )}
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
          </li>
        ))}
      </ol>
    </>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let todoContent;

  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button
          className="edit-btn"
          onClick={() => setIsEditing(false)}
          disabled={todo.title.length === 0}
        >
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button className="edit-btn" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {todoContent}
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
      {todo.title.length === 0 && (
        <p className="error-message">Task can't be empty.</p>
      )}
    </label>
  );
}

export default TaskList;
