import * as actionTypes from '../actions/actionTypes';

const initialState = {
  todoList: [],
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
    default:
      return state;
  }
};

export default reducer;
