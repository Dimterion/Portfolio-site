import { useState } from "react";
import { Link } from "react-router-dom";
import AddTodo from "../../components/AddTodo/AddTodo";
import TaskList from "../../components/TaskList/TaskList";
import "./tasks.css";

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
      <h2 className="tasks-header">Here is a simple To Do app</h2>
      <div className="tasks-container">
        <AddTodo onAddTodo={handleAddTodo} />
        <TaskList
          todos={todos}
          onChangeTodo={handleChangeTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </div>
      <p className="tasks-additionalText">
        <Link to="/todos">Here</Link> you can see the same app but this time it
        is made using{" "}
        <a
          href="https://beta.reactjs.org/learn/extracting-state-logic-into-a-reducer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reducer
        </a>
        .
      </p>
      <p className="tasks-additionalText">
        And <Link to="/tasks-combined">here</Link> you can see a similar app
        made using a combination of{" "}
        <a
          href="https://beta.reactjs.org/learn/scaling-up-with-reducer-and-context"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reducer and Context
        </a>
        .
      </p>
    </>
  );
}

export default Tasks;
