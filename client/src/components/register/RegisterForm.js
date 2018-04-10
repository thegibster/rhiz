import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import SignUp from './SignUp';

class RegisterForm extends Component {
  render () {
    return (
      <Container>
        <h1>Sign Up On Rhiz</h1>
        <SignUp />
      </Container>
    );
  }
}

export default RegisterForm;
