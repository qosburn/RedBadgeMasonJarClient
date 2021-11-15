import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import APIURL from '../helpers/environment';

const Login = (props) => {
  const [emailAddress, setEmailAddress] = useState('');
  const [passwordhash, setPasswordhash] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${APIURL}/user/login`, {
      method: 'POST',
      body: JSON.stringify({
        emailAddress: emailAddress,
        passwordhash: passwordhash,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="emailAddress">Email</Label>
          <Input
            onChange={(e) => setEmailAddress(e.target.value)}
            name="emailAddress"
            value={emailAddress}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="passwordhash">Password</Label>
          <Input
            onChange={(e) => setPasswordhash(e.target.value)}
            type="password"
            name="passwordhash"
            value={passwordhash}
          />
        </FormGroup>
        <Button className="button" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
