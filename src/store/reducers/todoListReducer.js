import * as actionTypes from '../actions/actionTypes';

const initialState = {
  todoList: [],
  input: null,
  priority: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TODO_ADDED:
      return {
        ...state,
        todoList: state.todoList.concat(action.newTodo),
      };
    case actionTypes.TODO_DELETED:
      return {
        ...state,
        todoList: state.todoList.filter(({ id }) => id !== action.toDoId),
      };
    case actionTypes.TODO_EDIT:
      return {
        ...state,
        todoList: state.todoList.filter(({ id }) => id === action.toDoId),
      };
    case actionTypes.GET_TODO_LIST:
      return {
        ...state,
        todoList: action.todoData,
      };
    default:
      return state;
  }
};

export default reducer;
