import { MouseEvent } from "react";

export const useTodo = (
  todos: ITodo[],
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
) => {
  //create new todo
  const handleAdd = (todoText: string) => {
    if (
      todoText.trim() === "" ||
      todoText === undefined ||
      todos.some((todo) => todo.text === todoText)
    )
      return;
    setTodos([
      ...todos,
      { key: Date.now(), text: todoText, isComplete: false },
    ]);
  };

  //remove todo by key
  const handleRemove = (e: MouseEvent<HTMLButtonElement>, key: number) => {
    e.preventDefault();
    setTodos(todos.filter((todo) => todo.key !== key));
  };

  //complete todo by key
  const handleComplete = (e: MouseEvent<HTMLButtonElement>, key: number) => {
    e.preventDefault();
    if (!todos.find((todo) => todo.key === key)) {
      return;
    }
    setTodos((previousTodos) => {
      const updateTodo = previousTodos.map((todo) => {
        if (todo.key === key) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      return updateTodo;
    });
  };

  return {
    handleAdd,
    handleRemove,
    handleComplete,
  };
};
