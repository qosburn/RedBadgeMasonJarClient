import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';

import APIURL from '../helpers/environment';

class SignUpClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      passwordhash: '',
      toggle: false, //added for modal
    };
  }

  toggle = () => this.setState({ toggle: !this.state.toggle });

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log('firing');
    try {
      const response = await fetch(`${APIURL}/user/login`, {
        method: 'POST',
        body: JSON.stringify({
          emailAddress: this.state.emailAddress,
          passwordhash: this.state.passwordhash,
        }),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      });
      console.log(response);
      let data = await response.json();
      console.log(data);
      this.props.updateToken(data.sessionToken);
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div>
        <p class="nav" onClick={this.toggle}>
          Login
        </p>

        <Modal isOpen={this.state.toggle} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            <h3>Login</h3>
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={(e) =>
                    this.setState({ emailAddress: e.target.value })
                  }
                  name="email"
                  value={this.state.emailAddress}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="passwordhash">Password</Label>
                <Input
                  onChange={(e) =>
                    this.setState({ passwordhash: e.target.value })
                  }
                  type="password"
                  name="passwordhash"
                  value={this.state.passwordhash}
                />
              </FormGroup>
              <Button className="button" type="submit" onClick={this.toggle}>
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default SignUpClass;
