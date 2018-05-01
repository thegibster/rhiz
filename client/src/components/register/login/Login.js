import React, { Component } from 'react';
import RegisterCard from '../RegisterCard.js';
import LoginForm from './LoginForm';

class Login extends Component {
  render() {
    return (
      <RegisterCard 
        header="Login to Your Account" 
        hint="Login"
        additionalText={
          <div style={{ textAlign: 'center' }}>
            <p>No account? <a href="/consumer">Sign Up Here</a></p>
          </div>
        }
        form={<LoginForm/>}
      />
    );
  }
}

export default Login;
