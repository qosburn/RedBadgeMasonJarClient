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
      //   <Container className="auth-container">
      //     <Row>
      //       <Col className="loginpage">
      //         <LoginClass updateToken={this.props.updateToken} />
      //       </Col>
      //       <Col>
      //         <SignupUpClass updateToken={this.props.updateToken} />
      //       </Col>
      //     </Row>
      //   </Container>
      <>
        <LoginClass
          className="loginpage"
          updateToken={this.props.updateToken}
        />

        <SignupUpClass updateToken={this.props.updateToken} />
      </>
    );
  }
}

export default Auth;
