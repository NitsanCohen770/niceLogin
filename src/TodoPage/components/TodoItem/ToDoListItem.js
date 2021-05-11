import React from 'react';
import { ListGroup, Form, FormControl, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip, IconButton } from '@material-ui/core';
import { faTrash, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import * as actions from '../../../store/actions';
const ToDoListItem = ({ input, priority, id, checked }) => {
  const dispatch = useDispatch();
  const editTodoHandler = () => {
    dispatch(actions.onEditTodo(id));
  };
  const deleteToDoHandler = () => {
    dispatch(actions.onDeletedTodo(id));
  };
  return (
    <ListGroup.Item variant={priority}>
      <Form inline className="auto">
        <Row>
          <Col>
            <div>
              {checked ? (
                <ReactMarkdown remarkPlugins={[gfm]} children={`~${input}~`} />
              ) : (
                input
              )}
            </div>
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
          <Col>
            <Tooltip title="Toggle Checked">
              <IconButton aria-label="checked">
                <FontAwesomeIcon icon={faCheck} />
              </IconButton>
            </Tooltip>
          </Col>
        </Row>
      </Form>
    </ListGroup.Item>
  );
};

export default ToDoListItem;
