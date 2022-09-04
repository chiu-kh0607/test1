import { ChangeEvent, FormEvent, FunctionComponent, MouseEvent } from "react";

interface InputFieldProps {
    text:string,
    handleAdd:(e:FormEvent,todoText:string)=>void,
    setTodoText:React.Dispatch<React.SetStateAction<string>>,
}
 
const InputField: FunctionComponent<InputFieldProps> = ({text,handleAdd,setTodoText}) => {
    return (
        <div>
            <form onSubmit={(e)=>{handleAdd(e,text);}}>
                <input 
                    type="input"
                    value={text}
                    onChange={(e)=>setTodoText(e.target.value)}
                    />
                <input type="submit"></input>
            </form>
        </div>

    );
}
 
export default InputField;