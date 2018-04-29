import React, { Component } from 'react';
import RegisterCard from '../RegisterCard.js';

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
      />
    );
  }
}

export default ConsumerSignUp;
