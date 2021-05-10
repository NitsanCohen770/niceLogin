import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import * as actions from '../store/actions';
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
import { useDispatch, useSelector } from 'react-redux';

const LoginForm = () => {
  const [toggleLogin, setToggleLogin] = useState(false);
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [signup, setSignup] = useState(false);
  const [validated, setValidated] = useState(false);

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isLoading = useSelector(state => state.auth.isLoading);
  const dispatch = useDispatch();

  const toggleLoginHandler = () => {
    setToggleLogin(prevState => !prevState);
  };
  const spinner = isLoading && <ClipLoader color="blue" size={150} />;
  const submitFormHandler = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    setValidated(true);
    event.preventDefault();
    if (inputPassword) {
      dispatch(actions.onLoginInit());
      axios({
        method: 'post',
        url: 'http://localhost:3003/login',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          email: inputEmail,
          password: inputPassword,
        }),
      }).then(res => dispatch(actions.onLoginSuccess(res.data)));
    } else {
      dispatch(actions.onSignupInit(inputEmail));
      setSignup(true);
    }
  };
  console.log(spinner);
  return (
    spinner || (
      <Form Validate validated={validated} onSubmit={submitFormHandler}>
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
            required
            type="email"
            placeholder="Enter email"
            onChange={event => setInputEmail(event.target.value)}
            value={inputEmail}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your Email.
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {toggleLogin && (
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
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
            By continuing with Google, LinkedIn, or Email, you agree to our
            Terms of Service and Privacy Policy.
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
        {isLoggedIn && <Redirect to="/" />}
      </Form>
    )
  );
};

export default LoginForm;
