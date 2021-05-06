import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup, Form, FormControl, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faRunning } from '@fortawesome/free-solid-svg-icons';
import * as actions from '../../store/actions';
import { nanoid } from 'nanoid';

const TodoItem = ({ priority }) => {
  const [todoInput, setTodoInput] = useState('');
  const dispatch = useDispatch();
  const addTodoHandler = () => {
    dispatch(
      actions.onAddedTodo({ text: todoInput, priority: 'danger', id: nanoid() })
    );
  };
  return (
    <ListGroup.Item variant={priority}>
      <Form inline className="auto" onSubmit={addTodoHandler}>
        <Row>
          <Col>
            <FormControl
              type="text"
              placeholder="Add Task"
              className="mr-sm-"
              onChange={event => setTodoInput(event.target.value)}
              value={todoInput}
            />{' '}
          </Col>
          <Col>
            <FontAwesomeIcon icon={faPlus} onClick={addTodoHandler} />
          </Col>
          <Col>
            {' '}
            <FontAwesomeIcon icon={faRunning} />
          </Col>
        </Row>
      </Form>
    </ListGroup.Item>
  );
};

export default TodoItem;
