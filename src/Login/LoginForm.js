import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import classes from './LoginForm.module.css';
import {
  Form,
  Button,
  Container,
  Row,
  ButtonToolbar,
  ButtonGroup,
  Col,
} from 'react-bootstrap';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

const LoginForm = () => {
  const [toggleLogin, setToggleLogin] = useState(false);
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [signup, setSignup] = useState(false);

  const toggleLoginHandler = () => {
    setToggleLogin(prevState => !prevState);
  };

  const submitFormHandler = event => {
    event.preventDefault();
    if (inputPassword) {
      console.log('hello');
    } else {
      
      setSignup(true);
    }
  };
  return (
    <Form onSubmit={submitFormHandler}>
      <Container className="d-flex ">
        <Row className="m-auto align-self-center">
          <ButtonToolbar>
            <ButtonGroup className="mr-4">
              <Button
                variant="primary"
                type="submit"
                className="fab fa-linkedin-in"
              ></Button>{' '}
            </ButtonGroup>
            <ButtonGroup>
              <Button
                variant="primary"
                type="submit"
                className="fab fa-google"
              ></Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Row>
      </Container>
      <Row>
        <Col>
          <hr></hr>
        </Col>
        <Col xs="auto">
          <span>
            <strong>or</strong>
          </span>
        </Col>
        <Col>
          <hr></hr>
        </Col>
      </Row>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={event => setInputEmail(event.target.value)}
          value={inputEmail}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      {toggleLogin && (
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={event => setInputPassword(event.target.value)}
            value={inputPassword}
          />
        </Form.Group>
      )}
      <Container className="d-flex ">
        <Row className="m-auto align-self-center">
          <Button variant="primary" type="submit">
            {!toggleLogin ? 'Sign up with Email' : 'Login with Email'}
          </Button>
        </Row>
      </Container>
      <Col>
        <span className={classes.policy}>
          By continuing with Google, LinkedIn, or Email, you agree to our Terms
          of Service and Privacy Policy.
        </span>
      </Col>
      <Col>
        <hr></hr>
      </Col>
      <Col className="text-center">
        <span className={classes.login}>
          {!toggleLogin ? 'Already signed up?' : 'Need to login?'}
          <button
            type="button"
            className={classes.button}
            onClick={toggleLoginHandler}
          >
            {!toggleLogin ? 'Go to login' : 'Go to signup'}
          </button>
        </span>
      </Col>
      {signup && <Redirect to="/signup" />}
    </Form>
  );
};

export default LoginForm;
