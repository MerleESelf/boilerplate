import { createStore, applyMiddleware } from "redux";
//change this out
import appReducer from "./reducer";

import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const store = createStore(
  //change this out
  appReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;
export * from "./authorization";
