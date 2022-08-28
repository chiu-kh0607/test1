import React, { FormEvent, useState, MouseEvent } from 'react';
import './App.css';
import InputField from './componet/InputField';
import Todo from './componet/Todo';
import TodoList from './componet/TodoList';

let handleSubmit:()=>Todo[];
//let todos:Todo[];
function App() {
  const [todoText,setTodoText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  //create new todo
  const handleAdd=(e:FormEvent)=>{
    e.preventDefault();
    console.log('add ',todoText);
    if(todoText.trim()===""||
      todoText===undefined||
       todos.some((todo)=>todo.text===todoText))
      return;
    setTodos([...todos,{ key: Date.now(), text:todoText, isComplete: false }])
    setTodoText("");
  }
  //remove todo by key
  const handleRemove=(e:MouseEvent<HTMLButtonElement>,key:number)=>{
    e.preventDefault();
    console.log('remove ',key);
    setTodos(todos.filter((todo)=>todo.key!=key))
    console.log(todos);
  }
  //complete todo by key
  const handleComplete=(e:MouseEvent<HTMLButtonElement>,key:number)=>{
    e.preventDefault();
    console.log('complete ',key);
    todos.map((todo)=>{if(todo.key===key)todo.isComplete=true});
    setTodos(todos);
    console.log(todos);
  }
  return (
    <div className="App">
      <InputField
        text={todoText}
        setTodoText={setTodoText}
        handleAdd={handleAdd}
      ></InputField>
      <TodoList 
        todos={todos}
        handleRemove={handleRemove}
        handleComplete={handleComplete}
        ></TodoList>
    </div>
  );
}

export default App;
