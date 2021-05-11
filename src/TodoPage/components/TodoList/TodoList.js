import React, { useEffect } from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import NewTodoItem from '../TodoItem/NewTodoItem';
import ToDoListItem from '../TodoItem/ToDoListItem';
import { nanoid } from 'nanoid';
import * as actions from '../../../store/actions/';
import TodoItem from '../TodoItem/NewTodoItem';
const TodoList = ({ edit, className }) => {
  const dispatch = useDispatch();
  const toDoData = useSelector(state => state.todoList.todoList);
  useEffect(() => {
    dispatch(actions.fetchTodos());
  }, [dispatch]);

  const toDoList = toDoData.map(toDoItem => {
    return (
      <ToDoListItem
        input={toDoItem.input}
        priority={toDoItem.priority}
        key={nanoid()}
        id={toDoItem.id}
        checked={false}
      />
    );
  });
  const today = new Date().toLocaleDateString();

  return (
    <Card className={className}>
      <Card.Body>
        {edit && <h3>Today {today}</h3>}
        <ListGroup>
          {edit && <NewTodoItem priority={'success'} />} {!edit && toDoList}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

TodoList.propTypes = {};

export default TodoList;
