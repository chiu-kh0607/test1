import { FormEvent, FunctionComponent, useState, MouseEvent } from "react";
import Todo from "./Todo";

interface TodoListProps {
    todos:Todo[],
    handleRemove:(e:MouseEvent<HTMLButtonElement>,key:number)=>void,
    handleComplete:(e:MouseEvent<HTMLButtonElement>,key:number)=>void,
}
 
const TodoList: FunctionComponent<TodoListProps> = (props) => {
    console.log(props.todos);
    return <div>
        {props.todos.map(
            (todo)=>(
                <Todo
                    key={todo.key}
                    id={todo.key}
                    text={todo.text}
                    isComplete={todo.isComplete}
                    handleRemove={props.handleRemove}
                    handleComplete={props.handleComplete}
                />
            ))}
    </div>
}
 
export default TodoList;