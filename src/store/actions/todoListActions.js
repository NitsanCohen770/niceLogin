import * as actionTypes from './actionTypes';
import axios from 'axios';

export const inputChanged = (input, priority) => {
  return {
    type: actionTypes.INPUT_CHANGED,
    input,
    priority,
  };
};

export const onAddedTodo = newToDo => {
  return (dispatch, getState) => {
    const userId = getState().auth.userId;
    const editedTodoId = getState().todoList.editedId;
    console.log(editedTodoId);
    axios
      .post('http://localhost:3003/addtodo', {
        input: newToDo.input,
        priority: newToDo.priority,
        id: newToDo.id,
        userId,
        editedTodoId,
      })
      .then(response => {
        dispatch(onCompletedAdded(newToDo));
        console.log(response);
      })
      .catch(err => console.log(err));
  };
};

export const onDeletedTodo = todoId => {
  return (dispatch, getState) => {
    const userId = getState().auth.userId;

    axios
      .post('http://localhost:3003/deletedtodo', {
        id: todoId,
        userId,
      })
      .then(response => {
        dispatch(onCompletedDeleted(todoId));
        console.log(response);
      })
      .catch(err => console.log(err));
  };
};
export const onCompletedAdded = newTodo => {
  return {
    type: actionTypes.TODO_ADDED,
    newTodo,
  };
};

export const onCompletedDeleted = toDoId => {
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

export const fetchTodos = () => {
  return (dispatch, getState) => {
    const userId = getState().auth.userId;

    axios
      .post('http://localhost:3003/getTodo', { userId })
      .then(response => {
        dispatch(onFetchTodos(response.data.todoList));
        console.log(response.data.todoList);
      })
      .catch(err => console.log(err));
  };
};

export const onFetchTodos = todoData => {
  return {
    type: actionTypes.GET_TODO_LIST,
    todoData,
  };
};
