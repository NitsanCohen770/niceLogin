import React from 'react';
import { ListGroup, Form, FormControl, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions';
const ToDoListItem = ({ text, priority, id }) => {
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
            <FormControl type="text" className="mr-sm-" readOnly value={text} />
          </Col>
          <Col>
            <FontAwesomeIcon icon={faEdit} onClick={editTodoHandler} />
          </Col>
          <Col>
            {' '}
            <FontAwesomeIcon icon={faTrash} onClick={deleteToDoHandler} />
          </Col>
        </Row>
      </Form>
    </ListGroup.Item>
  );
};

export default ToDoListItem;
