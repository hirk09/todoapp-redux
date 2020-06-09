import * as constant from "../constant";
let intialState = {
  isLoading: false,
};
const toggleTodos = (state = intialState, action) => {
  switch (action.type) {
    case constant.TOGGLE_TODO:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
};
export default toggleTodos;
