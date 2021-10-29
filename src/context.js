import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

const todoContext = createContext();

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {});
  return (
    <todoContext.Provider value={{ state, dispatch }}>
      {children}
    </todoContext.Provider>
  );
}

export function useDispatch() {
  const { state, dispatch } = useContext(todoContext);
  return [state, dispatch];
}

export default ContextProvider;
