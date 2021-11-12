import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SignupUpClass from './SignUpClass';
import LoginClass from './LoginClass';

class Auth extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container className="auth-container">
        <Row>
          <Col className="loginpage">
            <LoginClass updateToken={this.props.updateToken} />

            <center>
              <SignupUpClass updateToken={this.props.updateToken} />
            </center>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Auth;
