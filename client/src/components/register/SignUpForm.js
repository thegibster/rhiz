import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from 'semantic-ui-react';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(values) { 
    console.log("values", values);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    console.log("this.props", this.props);

    return (
    <form onSubmit={handleSubmit(this.submit)}>
      <div>
        <div>
          <Field
            name="fullName"
            component="input"
            type="text"
            placeholder="Full Name"
            />
        </div>
      </div>
      <div>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
            />
        </div>
      </div>
      <div>
        <div>
          <Field
            name="password"
            component="input"
            type="text"
            placeholder="Password"
            />
        </div>
      </div>
      <div>
        <Button type="submit" disabled={pristine || submitting}>
          Submit
        </Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </div>
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
