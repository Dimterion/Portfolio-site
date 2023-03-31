import { useState } from "react";
import { useTasks, useTasksDispatch } from "../../context/Context";
import "./taskListCombined.css";

export default function TaskList() {
  const tasks = useTasks();

  let completedTasks = 0;

  tasks.map((todo) => {
    if (todo.done) {
      completedTasks = completedTasks + 1;
    }
    return completedTasks;
  });

  return (
    <>
      {tasks.length === 0 ? (
        <h4>You have no tasks</h4>
      ) : (
        <h4>
          You have {completedTasks} completed{" "}
          {completedTasks === 1 ? "task" : "tasks"} out of {tasks.length}{" "}
          {tasks.length === 1 ? "task" : "tasks"} in total
        </h4>
      )}
      <ol>
        {tasks.map((task) => (
          <li className="todo-item" key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ol>
    </>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button
          onClick={() => setIsEditing(false)}
          disabled={task.text.length === 0}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
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
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: "changed",
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      {taskContent}
      <button
        className="delete-btn"
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
      >
        Delete
      </button>
      {task.text.length === 0 && <p>Task can't be empty.</p>}
    </label>
  );
}
