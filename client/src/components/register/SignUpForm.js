import React, { Component } from 'react';
import { Card, Input, Button } from 'semantic-ui-react';

const SignUpForm = ({
  onSubmit, onChange, errors, successMessage, user 
}) => {
    return <form onSubmit={onSubmit}>
        <Input fluid placeholder="Full Name" value={user.name}/>
        <Input fluid placeholder="Email" value={user.email}/>
        <Input fluid placeholder="Password" value={user.password}/>
        <Button fluid>Sign Up</Button>
      </form>;
}

export default SignUpForm;