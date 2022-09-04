import React, { FormEvent, useState, MouseEvent } from 'react';
import './App.css';
import InputField from './componet/InputField';
import Todo from './componet/Todo';
import TodoList from './componet/TodoList';
import { TodoContext } from './context/TodoContext';
import { useTodo } from './hook/useTodo';

let handleSubmit:()=>ITodo[];
//let todos:Todo[];
function App() {
  const [todoText,setTodoText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const {handleAdd,handleRemove,handleComplete} = useTodo (todos, setTodos, setTodoText);
  return (
    <div className="App">
      <TodoContext.Provider value={{
        handleAdd,
        handleRemove,
        handleComplete
      }}>
      <InputField
        text={todoText}
        setTodoText={setTodoText}
        handleAdd={handleAdd}
      />
      <TodoList 
        todos={todos}
        handleRemove={handleRemove}
        handleComplete={handleComplete}
        ></TodoList>

      </TodoContext.Provider>
    </div>
  );
}

export default App;
