import * as actionTypes from '../actions/actionTypes';

const initialState = {
  todoList: [],
  input: null,
  priority: null,
  editedId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TODO_ADDED:
      if (state.editedId) {
        const editedIndex = state.todoList.findIndex(
          todo => todo.id === state.editedId
        );
        const updatedTodoList = [
          ...state.todoList,
          (state.todoList[editedIndex].input = state.input),
        ];
        return {
          ...state,
          todoList: updatedTodoList,
          editedId: null,
          input: null,
        };
      }
      return {
        ...state,
        todoList: state.todoList.concat(action.newTodo),
        input: null,
      };
    case actionTypes.TODO_DELETED:
      return {
        ...state,
        todoList: state.todoList.filter(({ id }) => id !== action.toDoId),
      };
    case actionTypes.TODO_EDIT:
      const selectedTodo = state.todoList.filter(
        ({ id }) => id === action.toDoId
      );
      return {
        ...state,
        input: selectedTodo[0].input,
        priority: selectedTodo[0].priority,
        editedId: action.toDoId,
      };
    case actionTypes.INPUT_CHANGED:
      return {
        ...state,
        input: action.input,
        priority: action.priority,
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
