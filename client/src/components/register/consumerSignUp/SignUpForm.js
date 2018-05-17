import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";
import * as actions from '../../../actions';
import { connect } from 'react-redux';
import SignUpFormFields from '../SignUpFormFields';
import { renderInput } from '../../utils/formValidations';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    // this.handleNavigation = this.handleNavigation.bind(this);
  }
  state = {
    loginInfo: null
  };

  renderForm() {
    const signUpForm = SignUpFormFields.map(SignUp => {
      return (
        <Field
          key={SignUp.name}
          name={SignUp.name}
          component={renderInput}
          type={SignUp.type}
          placeholder={SignUp.placeholder}
        />
      );
    });
    return signUpForm;
  }
  
  // handleNavigation = () => {
  //   this.props.history.push("/login");
  // };

  submit(values) {
    const { fullName, email, password } = values;
    const loginInfo = { fullName, email, password };
    this.setState({
      loginInfo: loginInfo
    });
    this.props.createLogin(loginInfo);
    // this.handleNavigation();
  }

  render() {
    console.log("this.props", this.props);
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <div>{this.renderForm()}</div>
        <Button.Group fluid>
          <Button positive type="submit" disabled={pristine || submitting}>
            Submit
          </Button>
          <Button.Or />
          <Button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear
          </Button>
        </Button.Group>
      </form>
    );
  }
}

const mapStateToProps = state => ({
    auth: state.auth,
    form: state.form
});

SignUpForm = reduxForm({
  form: "signUp" // a unique identifier for this form
})(SignUpForm);

export default withRouter(connect(mapStateToProps, actions)(SignUpForm));
