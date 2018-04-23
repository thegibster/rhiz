import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import SignUp from './SignUp';

class RegisterForm extends Component {
  render () {
    return (
      <Container>
        <h1 style={{ textAlign: 'center', padding: 25 }}>Sign Up on Rhiz</h1>
        <SignUp />
      </Container>
    );
  }
}

export default RegisterForm;
