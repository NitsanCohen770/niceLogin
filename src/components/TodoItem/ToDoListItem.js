import React from 'react';
import { ListGroup, Form, FormControl, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip, IconButton } from '@material-ui/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions';
const ToDoListItem = ({ input, priority, id }) => {
  const dispatch = useDispatch();
  const editTodoHandler = () => {};
  const deleteToDoHandler = () => {
    dispatch(actions.onDeletedTodo(id));
  };
  return (
    <ListGroup.Item variant={priority}>
      <Form inline className="auto">
        <Row>
          <Col>
            <FormControl
              type="text"
              className="mr-sm-"
              readOnly
              value={input}
            />
          </Col>
          <Col>
            <Tooltip title="Edit">
              <IconButton aria-label="edit">
                <FontAwesomeIcon icon={faEdit} onClick={editTodoHandler} />{' '}
              </IconButton>
            </Tooltip>
          </Col>
          <Col>
            <Tooltip title="Delete Item">
              <IconButton aria-label="delete">
                <FontAwesomeIcon icon={faTrash} onClick={deleteToDoHandler} />
              </IconButton>
            </Tooltip>
          </Col>
        </Row>
      </Form>
    </ListGroup.Item>
  );
};

export default ToDoListItem;
