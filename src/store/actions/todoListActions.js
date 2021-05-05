import * as actionTypes from './actionTypes';

export const onAddedTodo = newTodo => {
  return {
    type: actionTypes.TODO_ADDED,
    newTodo,
  };
};
export const onDeletedTodo = toDoId => {
  return {
    type: actionTypes.TODO_DELETED,
    toDoId,
  };
};
