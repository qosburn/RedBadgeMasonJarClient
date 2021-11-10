import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class SignUpClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      passwordhash: '',
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    console.log('firing');
    try {
      const response = await fetch('http://localhost:3000/user/login', {
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
        <h3>Sign In</h3>

        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={(e) => this.setState({ emailAddress: e.target.value })}
              name="email"
              value={this.state.emailAddress}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="passwordhash">Password</Label>
            <Input
              onChange={(e) => this.setState({ passwordhash: e.target.value })}
              type="password"
              name="passwordhash"
              value={this.state.passwordhash}
            />
          </FormGroup>
          <Button className="button" type="submit">
            Signup
          </Button>
        </Form>
      </div>
    );
  }
}

export default SignUpClass;
