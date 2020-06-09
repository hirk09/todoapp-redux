import { combineReducers } from "redux";
import getTodo from "./toggleTodo";

const rootReducer = combineReducers({
  getTodo: getTodo,
});
export default rootReducer;
