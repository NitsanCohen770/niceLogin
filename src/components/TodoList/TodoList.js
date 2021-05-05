import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import NewTodoItem from '../TodoItem/NewTodoItem';
import ToDoListItem from '../TodoItem/ToDoListItem';
import { nanoid } from 'nanoid';

const TodoList = ({ edit, className }) => {
  const toDoData = useSelector(state => state.todoList.todoList);
  console.log(toDoData);
  const toDoList = toDoData.map(toDoItem => {
    return (
      <ToDoListItem
        text={toDoItem.text}
        priority={toDoItem.priority}
        key={nanoid()}
        id={toDoItem.id}
      />
    );
  });
  const currentDate =
    new Date().getDay().toString() +
    '/' +
    new Date().getMonth().toString() +
    '/' +
    new Date().getFullYear().toString();
  return (
    <Card className={className}>
      <Card.Body>
        {edit && <h3>Today {currentDate}</h3>}
        <ListGroup>
          {edit && <NewTodoItem priority={'success'} />} {!edit && toDoList}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

TodoList.propTypes = {};

export default TodoList;
