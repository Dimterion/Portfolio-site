import { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import TaskList from "../TaskList/TaskList";
import "./toDoApp.css";

let nextId = 1;
const initialTodos = [
  { id: 0, title: "This is an example of a task", done: true },
];

function Tasks() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === nextTodo.id) {
          return nextTodo;
        } else {
          return todo;
        }
      })
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <>
      <div className="tasks-container">
        <h2>
          Here is a simple To Do app that uses React{" "}
          <a
            className="link"
            href="https://beta.reactjs.org/learn/managing-state"
            target="_blank"
            rel="noopener noreferrer"
          >
            State
          </a>
        </h2>
        <AddTodo onAddTodo={handleAddTodo} />
        <TaskList
          todos={todos}
          onChangeTodo={handleChangeTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </div>
    </>
  );
}

export default Tasks;
