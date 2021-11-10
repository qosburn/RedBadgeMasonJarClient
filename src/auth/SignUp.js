import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';

const Signup = (props) => {
  const [emailAddress, setEmailAddress] = useState('');
  const [passwordhash, setPasswordhash] = useState('');
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/user/create', {
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
      });
  };

  return (
    <>
      Need an account?{' '}
      <a class="signup" onClick={toggle}>
        Sign up.
      </a>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <h3>Sign Up</h3>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={(e) => setEmailAddress(e.target.value)}
                name="email"
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
              Signup
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Signup;
