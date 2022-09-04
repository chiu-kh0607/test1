import { FormEvent, MouseEvent } from "react";
import TodoList from "../componet/TodoList";

export const useTodo = (
    todos: ITodo[],
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>,
    setTodoText: React.Dispatch<React.SetStateAction<string>>,
  ) =>
{
      //create new todo
  const handleAdd=(e:FormEvent,todoText:string)=>{
    e.preventDefault();
    if(todoText.trim()===""||
      todoText===undefined||
       todos.some((todo)=>todo.text===todoText))
      return;
    setTodos([...todos,{ key: Date.now(), text:todoText, isComplete: false }])
    setTodoText("");
  };
  //remove todo by key
  const handleRemove=(e:MouseEvent<HTMLButtonElement>,key:number)=>{
    e.preventDefault();
    console.log('remove ',key);
    setTodos(todos.filter((todo)=>todo.key!=key))
    console.log(todos);
  };
  //complete todo by key
  const handleComplete=(e:MouseEvent<HTMLButtonElement>,key:number)=>{
    e.preventDefault();
    console.log('complete ',key);
    if (!todos.find((todo) => todo.key === key)) {
        return;
    }
    setTodos((previousTodo)=>{
        const updateTodo = previousTodo.map((todo)=>{
            if(todo.key===key){
                todo.isComplete=!todo.isComplete;
            }
            return todo;
        })
        return updateTodo;
    });
  };

  return {
    handleAdd,
    handleRemove,
    handleComplete,
  }
};