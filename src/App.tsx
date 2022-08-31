import { useState } from "react";
import "./App.css";
import InputField from "./componet/InputField";
import TodoList from "./componet/TodoList";
import { TodoContext } from "./context/TodoContext";
import { useTodo } from "./hook/useTodo";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const { handleAdd, handleComplete, handleRemove } = useTodo(todos, setTodos);

  return (
    <div className="App">
      <TodoContext.Provider
        value={{
          handleAdd,
          handleComplete,
          handleRemove,
        }}
      >
        <InputField />
        <TodoList todos={todos} />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
