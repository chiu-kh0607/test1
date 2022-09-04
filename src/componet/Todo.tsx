import { FormEvent, FunctionComponent, MouseEvent } from "react";

interface TodoProps {
    id:number,
    text:string,
    isComplete:boolean,
    handleRemove:(e:MouseEvent<HTMLButtonElement>,key:number)=>void,
    handleComplete:(e:MouseEvent<HTMLButtonElement>,key:number)=>void,
}
interface Todo{
    key:number,
    text:string,
    isComplete:boolean,
}
 
const Todo: FunctionComponent<TodoProps> = ({
    id,
    text,
    isComplete,
    handleRemove,
    handleComplete,
}) => {
    let whatever:ITodo;
    return (
        <div
            className={isComplete?'Complete Todo':'Incomplete Todo'}
        >
            <span>{text}</span>
            <button
                onClick={(e:MouseEvent<HTMLButtonElement>)=>{handleComplete(e,id)}}
            >[complete]</button>
            <button
                onClick={(e:MouseEvent<HTMLButtonElement>)=>{handleRemove(e,id)}}
            >[delete]</button>
        </div>
    );
}
 
export default Todo;