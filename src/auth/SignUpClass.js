import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class SignUpClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      passwordhash: '',
      firstName: '',
      lastName: '',
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    console.log('firing');
    try {
      const response = await fetch('http://localhost:3000/user/create', {
        method: 'POST',
        body: JSON.stringify({
          emailAddress: this.state.emailAddress,
          passwordhash: this.state.passwordhash,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
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
        <h3>Sign Up</h3>

        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="fName">First Name</Label>
            <Input
              onChange={(e) => this.setState({ firstName: e.target.value })}
              name="fName"
              value={this.state.firstName}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lName">Last Name</Label>
            <Input
              onChange={(e) => this.setState({ lastName: e.target.value })}
              name="lName"
              value={this.state.lastName}
            />
          </FormGroup>
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
