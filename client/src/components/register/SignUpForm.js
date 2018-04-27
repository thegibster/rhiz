import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from 'semantic-ui-react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import SignUpFormFields from './SignUpFormFields';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  state = {
    loginInfo: null
  }

  renderForm() {
    const signUpForm = SignUpFormFields.map(SignUp => {
      return (
        <Field key={SignUp.name}
          name={SignUp.name}
          component={SignUp.component}
          type={SignUp.type}
          placeholder={SignUp.placeholder}
        />
      )
    });
    return signUpForm
  }

  submit(values) { 
    console.log("values", values);
    const { fullName, email, password } = values;
    const loginInfo = { fullName, email, password }
    this.setState({
      loginInfo: loginInfo
    });
    console.log("this.state", this.state);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
    <form onSubmit={handleSubmit(this.submit)}>
      <div>
        {this.renderForm()}
      </div>
      <Button.Group fluid>
        <Button positive type="submit" disabled={pristine || submitting}>
          Submit
        </Button>
        <Button.Or/>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear
        </Button>
      </Button.Group>
    </form>
  );
};
}

const mapStateToProps = state => ({
    auth: state.auth
});

SignUpForm = reduxForm({
  form: "login" // a unique identifier for this form
})(SignUpForm);

export default connect(mapStateToProps, actions)(SignUpForm);
