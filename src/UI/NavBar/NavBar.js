import React, { Fragment } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faPlus,
  faQuestion,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
const NavBar = () => {
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
