import { useState } from "react";
import "./taskList.css";

function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <ol>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ol>
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
        <button className="edit-btn" onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
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
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>Delete</button>
    </label>
  );
}

export default TaskList;
