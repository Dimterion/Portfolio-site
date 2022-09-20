import { Link } from "react-router-dom";
import ToDoWithReducer from "../../components/ToDoWithReducer/ToDoWithReducer";
import "./toDos.css";

function ToDos() {
  return (
    <div className="toDo-container">
      <h2>
        This To Do app is made with{" "}
        <a
          className="linkToDo"
          href="https://beta.reactjs.org/learn/extracting-state-logic-into-a-reducer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reducer
        </a>
      </h2>
      <ToDoWithReducer />
      <Link className="linkToDo" to="/tasks">
        Back to the previous To Do app
      </Link>
    </div>
  );
}

export default ToDos;
