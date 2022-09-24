import { useReducer } from "react";
import AddTodo from "../AddTodo/AddTodo";
import TaskList from "../TaskList/TaskList";
import reducer from "../../reducers/reducer";
import "./toDoWithReducer.css";

let nextId = 1;
const initialTodos = [
  { id: 0, title: "This is an example of a task", done: true },
];

function ToDoWithReducer() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  function handleAddToDo(title) {
    dispatch({
      type: "added",
      id: nextId++,
      title: title,
    });
  }

  function handleChangeToDo(todo) {
    dispatch({
      type: "changed",
      todo: todo,
    });
  }

  function handleDeleteToDo(id) {
    dispatch({
      type: "deleted",
      id: id,
    });
  }

  return (
    <div className="toDoWithReducer-container">
      <AddTodo onAddTodo={handleAddToDo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeToDo}
        onDeleteTodo={handleDeleteToDo}
      />
    </div>
  );
}

export default ToDoWithReducer;
