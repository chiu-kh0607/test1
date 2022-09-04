import { createContext, FormEvent, MouseEvent } from "react";

interface ITodoContext{
    handleAdd:(e:FormEvent,todoText:string)=>void,
    handleRemove:(e:MouseEvent<HTMLButtonElement>,key:number)=>void,
    handleComplete:(e:MouseEvent<HTMLButtonElement>,key:number)=>void,
}
export const TodoContext = createContext<ITodoContext>({
    handleAdd:()=>{},
    handleRemove:()=>{},
    handleComplete:()=>{},
})