import React, { Component } from 'react';
import RegisterCard from '../RegisterCard.js';
import SignUpForm from './SignUpForm';

class ConsumerSignUp extends Component {
  render() {
    return (
      <RegisterCard 
        header="Create Account"
        additionalText={
          <div style={{ textAlign: 'center' }}>
            <p>Already have an account? <a href="/login">Login</a></p>
          </div>
        }
        hint="Sign Up"
        form={<SignUpForm />}
      />
    );
  }
}

export default ConsumerSignUp;
