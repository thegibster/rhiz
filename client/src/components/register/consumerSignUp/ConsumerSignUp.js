import React, { Component } from 'react';
import RegisterCard from '../RegisterCard.js';

class ConsumerSignUp extends Component {
  render() {
    const additionalText = () => {
        <div>
            
        </div>
    }
    return (
      <RegisterCard 
        header="Create Account"
        additionalText={
          <div style={{ textAlign: 'center' }}>
            <p>Already have an account? <a href="/login">Login</a></p>
          </div>
        }
      />
    );
  }
}

export default ConsumerSignUp;
