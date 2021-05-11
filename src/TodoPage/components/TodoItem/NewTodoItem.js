import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip, IconButton } from '@material-ui/core';
import { ListGroup, Form, FormControl, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faRunning } from '@fortawesome/free-solid-svg-icons';
import * as actions from '../../../store/actions';
import { nanoid } from 'nanoid';

const TodoItem = ({ priority }) => {
  const input = useSelector(state => state.todoList.input);
  const dispatch = useDispatch();
  const addTodoHandler = () => {
    if (!input) {
      return;
    }
    dispatch(
      actions.onAddedTodo({
        input: input,
        priority: 'danger',
        id: nanoid(),
      })
    );
  };
  return (
    <ListGroup.Item variant={priority}>
      <Form inline className="auto" onSubmit={addTodoHandler}>
        <Row>
          <Col>
            <FormControl
              required
              type="text"
              placeholder="Add Task"
              className="mr-sm-"
              onChange={event =>
                dispatch(actions.inputChanged(event.target.value))
              }
              value={input}
            />{' '}
          </Col>
          <Col>
            <Tooltip title="Add Todo">
              <IconButton aria-label="add">
                <FontAwesomeIcon icon={faPlus} onClick={addTodoHandler} />
              </IconButton>
            </Tooltip>
          </Col>
          <Col>
            <Tooltip title="Toggle priority">
              <IconButton aria-label="priority">
                <FontAwesomeIcon icon={faRunning} />
              </IconButton>
            </Tooltip>
          </Col>
        </Row>
      </Form>
    </ListGroup.Item>
  );
};

export default TodoItem;
