import React, { Component } from 'react';
import RegisterCard from '../RegisterCard.js';

class Login extends Component {
  render() {
    return (
      <RegisterCard header="Login to Your Account" hint="Login" />
    );
  }
}

export default Login;