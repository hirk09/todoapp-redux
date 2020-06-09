import React from "react";
import * as constant from "../constant";

let initialState = {};
const addTodos = (state = initialState, action) => {
  switch (action.type) {
    case constant.ADD_TODO:
      return {
        ...state,
        data: action.payload.data,
        checked: false
      };
  }
};
export default addTodos;
