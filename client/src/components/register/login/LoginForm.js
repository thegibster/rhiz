import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "semantic-ui-react";
import * as actions from "../../../actions";
import { connect } from "react-redux";
import SignUpFormFields from "../SignUpFormFields";
import { renderInput } from "../../utils/formValidations";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  state = {
    loginInfo: null
  };

  renderForm() {
    return  (
      <div>
        <Field
          name={SignUpFormFields[1].name}
          component={renderInput}
          type={SignUpFormFields[1].type}
          placeholder={SignUpFormFields[1].placeholder}
        />
        <Field
          name={SignUpFormFields[2].name}
          component={renderInput}
          type={SignUpFormFields[2].type}
          placeholder={SignUpFormFields[2].placeholder}
        />
      </div>
    );
  }

  submit(values) {
    const { fullName, email, password } = values;
    const loginInfo = { fullName, email, password };
    this.setState({
      loginInfo: loginInfo
    });
    this.props.loginUser(loginInfo);
  }

  render() {
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

LoginForm = reduxForm({
  form: "login" // a unique identifier for this form
})(LoginForm);

export default connect(mapStateToProps, actions)(LoginForm);
