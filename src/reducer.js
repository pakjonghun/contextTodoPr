export const ADD = "ADD";
export const DEL = "DEL";
export const DONE = "DONE";
export const EDIT = "EDIT";

const reducer = (state, { text, type, id }) => {
  switch (type) {
    case ADD:
      return { [id]: { text, isDone: false }, ...state };

    case DEL:
      const newObj = JSON.parse(JSON.stringify(state));
      delete newObj[id];
      return newObj;

    case DONE:
      const nnewObj = JSON.parse(JSON.stringify(state));
      nnewObj[id]["isDone"] = !nnewObj[id]["isDone"];
      return nnewObj;

    case EDIT:
      const nnnewObj = JSON.parse(JSON.stringify(state));
      nnnewObj[id]["text"] = text;
      return nnnewObj;

    default:
      break;
  }
};

export default reducer;
