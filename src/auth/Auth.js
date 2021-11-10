import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SignupUpClass from './SignUpClass';
import LoginClass from './LoginClass';

const Auth = (props) => {
  return (
    <Container className="auth-container">
      <Row>
        <Col className="loginpage">
          <LoginClass updateToken={props.updateToken} />

          <center>
            <SignupUpClass updateToken={props.updateToken} />
          </center>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
