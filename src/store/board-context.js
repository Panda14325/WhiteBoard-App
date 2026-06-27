import { createContext } from "react";

const boardContext = createContext({
  activeToolItems: "",
  toolActionType: "",
  changeToolHandler: () => {},
  boardMouseDownHandler: () => {},
  boardMouseMoveHandler: () => {},
  boardMouseUpHandler: () => {},
  textAreaBlurHandler: () => {},
  boardUndoHandler: () => {},
  boardRedoHandler: () => {},
  elements: [],
  history: [[]],
  index: 0,
});

export default boardContext;
