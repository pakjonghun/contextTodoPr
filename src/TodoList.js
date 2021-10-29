import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "./context";
import { DEL, DONE, EDIT } from "./reducer";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, dispatch] = useDispatch();
  return (
    <div>
      <h1>TodoList</h1>

      <ul>
        {Object.keys(todos).map((key) => (
          <li key={key}>
            {!todos[key]["isDone"] ? (
              <span>{todos[key]["text"]}</span>
            ) : (
              <del>{todos[key]["text"]}</del>
            )}
            <Btn onClick={() => dispatch({ type: DEL, id: key })}>삭제</Btn>
            <Btn onClick={() => dispatch({ type: DONE, id: key })}>
              {todos[key]["isDone"] ? "시작" : "끝"}
            </Btn>
            <Btn
              onClick={() => {
                const val = prompt("수정값을 입력하세요.");
                dispatch({
                  type: EDIT,
                  id: key,
                  text: !val || val.length > 0 ? val : todos[key]["text"],
                });
              }}
            >
              수정
            </Btn>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

const Btn = styled.span`
  margin-left: 10px;
  cursor: pointer;
`;
