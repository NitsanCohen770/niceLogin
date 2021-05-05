import React, { Fragment } from 'react';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import LoginForm from '../../Login/LoginForm';
import classes from './LoginPage.module.css';
import { Card, Container, Row} from 'react-bootstrap';

const LoginPage = () => {
  return (
    <Container className="d-flex vh-100">
      <Row className="m-auto align-self-center">
        <Card>
          <Card.Body>
            <LoginForm />
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

LoginPage.propTypes = {};

export default LoginPage;
