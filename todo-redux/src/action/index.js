import { createAction } from "redux-actions";
import * as constant from "../constant";

export const AddTodo = createAction(constant.ADD_TODO);
export const ToggleTodo = createAction(constant.TOGGLE_TODO);
