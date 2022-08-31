import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const InputField: React.FC = () => {
  const [text, setTodoText] = useState("");

  const { handleAdd } = useContext(TodoContext);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd(e.currentTarget.value);
        }}
      >
        <input
          type="input"
          value={text}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default InputField;
