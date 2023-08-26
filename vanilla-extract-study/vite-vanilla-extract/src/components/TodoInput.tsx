import useTodoStore from "../stores/useTodoStore";
import { useState } from "react";
import { todoInput } from "../styles/app.css";

const TodoInput = () => {
  const appendTodo = useTodoStore((state) => state.appendTodo);
  const [value, setValue] = useState("");

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      appendTodo(e.target.value);
      setValue("");
    }
  };

  return (
    <input
      type="text"
      className={todoInput}
      placeholder="할 일을 입력 후, Enter를 누르세요"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => handleKeyDown(e)}
    />
  );
};

export default TodoInput;
