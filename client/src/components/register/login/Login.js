import React, { Component } from 'react';
import RegisterCard from '../RegisterCard.js';
import LoginForm from './LoginForm';

class Login extends Component {
  render() {
    return (
      <RegisterCard 
        header="Login to Your Account" 
        hint="Login"
        form={<LoginForm/>}
      />
    );
  }
}

export default Login;
