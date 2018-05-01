import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from 'semantic-ui-react';
import * as actions from '../../../actions';
import { connect } from 'react-redux';
import SignUpFormFields from '../SignUpFormFields';
import { renderInput } from '../../utils/formValidations';

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
          component={renderInput}
          type={SignUp.type}
          placeholder={SignUp.placeholder}
        />
      )
    });
    return signUpForm
  }

  submit(values) { 
    const { fullName, email, password } = values;
    const loginInfo = { fullName, email, password }
    this.setState({
      loginInfo: loginInfo
    });
    this.props.createLogin(loginInfo);
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
    auth: state.auth,
    form: state.form
});

SignUpForm = reduxForm({
  form: "signUp" // a unique identifier for this form
})(SignUpForm);

export default connect(mapStateToProps, actions)(SignUpForm);
