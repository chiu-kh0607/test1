import React from "react";
import Todo from "./Todo";

interface TodoListProps {
  todos: ITodo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.key} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
