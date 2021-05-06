import * as actionTypes from './actionTypes';
import axios from 'axios';

export const onAddedTodo = newToDo => {
  return dispatch => {
    axios({
      method: 'post',
      url: 'http://localhost:3003/addtodo',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({
        input: newToDo.input,
        priority: newToDo.priority,
        id: newToDo.id,
      }),
    }).then(response => dispatch(onCompletedAdded(newToDo)));
  };
};

export const onCompletedAdded = newTodo => {
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

export const onEditTodo = toDoId => {
  return {
    type: actionTypes.TODO_EDIT,
    toDoId,
  };
};
