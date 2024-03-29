import React, {  useState } from "react";
import "./Input.css";

import { useGlobalContext } from "../context/context";

const Input = () => {
  const { addTodo } = useGlobalContext();
  const [input, setInput] = useState("");

  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodo(input);
          setInput("");
        }}
      >
        Add!
      </button>
    </div>
  );
};

export default Input;
