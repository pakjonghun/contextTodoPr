import { useReducer, useState } from "react";
import ContextProvider, { useDispatch } from "./context";
import Main from "./Main";
function App() {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>
  );
}

export default App;
