import { createContext, MouseEvent } from "react";

interface ITodoContext {
  handleAdd: (todoText: string) => void;
  handleRemove: (e: MouseEvent<HTMLButtonElement>, key: number) => void;
  handleComplete: (e: MouseEvent<HTMLButtonElement>, key: number) => void;
}

export const TodoContext = createContext<ITodoContext>({
  handleAdd: () => {},
  handleRemove: () => {},
  handleComplete: () => {},
});
