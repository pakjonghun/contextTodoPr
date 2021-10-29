import React from "react";
import { useState } from "react";
import { useDispatch } from "./context";
import { ADD } from "./reducer";

const Todo = () => {
  const [text, setText] = useState("");
  const [todos, dispatch] = useDispatch();
  return (
    <div>
      <h1>할일을 입력하세요</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: ADD, id: Date.now(), text, isDone: false });
          setText("");
        }}
      >
        <input
          placeholder="할일 입력하세요"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>할일을 추가해볼까?</button>
      </form>
    </div>
  );
};

export default Todo;
