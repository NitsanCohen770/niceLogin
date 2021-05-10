import '@fortawesome/fontawesome-free/css/all.min.css';
import LoginForm from './LoginForm';
import classes from './LoginPage.module.css';
import { Fade } from '@material-ui/core';
import { Card, Container, Row } from 'react-bootstrap';

const LoginPage = () => {
  return (
    <Fade in>
      <Container className="d-flex vh-100">
        <Row className="m-auto align-self-center">
          <Card>
            <Card.Body>
              <Fade timeout={{ enter: 2000, exit: 2000 }}>
                <LoginForm />
              </Fade>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </Fade>
  );
};

LoginPage.propTypes = {};

export default LoginPage;
