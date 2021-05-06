import React, { Fragment } from 'react';
import {
  Navbar,
  Nav,
  NavLink,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faPlus,
  faQuestion,
  faSearch,
  faEject,
} from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from 'react-router-bootstrap';
import * as actions from '../../store/actions';
import { useDispatch } from 'react-redux';

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Navbar fixed="top" bg="dark" variant="dark" style={{ zIndex: 900 }}>
        <Nav className="ml-auto">
          <Nav.Link href="#home">
            <FontAwesomeIcon icon={faClock} />
          </Nav.Link>
          <Nav.Link href="#features">
            <FontAwesomeIcon icon={faPlus} />
          </Nav.Link>
          <Nav.Link href="#pricing">
            <FontAwesomeIcon icon={faQuestion} />
          </Nav.Link>
          <LinkContainer to="/login">
            <Nav.Link>
              <FontAwesomeIcon
                icon={faEject}
                onClick={() => dispatch(actions.onLogout())}
              ></FontAwesomeIcon>
            </Nav.Link>
          </LinkContainer>
        </Nav>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </Form>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
