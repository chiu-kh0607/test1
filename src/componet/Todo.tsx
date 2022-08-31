import { FunctionComponent, MouseEvent, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

interface TodoProps {
  todo: ITodo;
}

const Todo: FunctionComponent<TodoProps> = ({ todo }) => {
  const { handleComplete, handleRemove } = useContext(TodoContext);
  return (
    <div className={todo.isComplete ? "Complete Todo" : "Incomplete Todo"}>
      <span>{todo.text}</span>
      <button
        onClick={(e: MouseEvent<HTMLButtonElement>) => {
          handleComplete(e, todo.key);
        }}
      >
        [complete]
      </button>
      <button
        onClick={(e: MouseEvent<HTMLButtonElement>) => {
          handleRemove(e, todo.key);
        }}
      >
        [delete]
      </button>
    </div>
  );
};

export default Todo;
