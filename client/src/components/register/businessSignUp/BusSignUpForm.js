import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import BusFormFields from "./BusFormFields";
import { renderInput } from "../../utils/formValidations";

class BusSignUpForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  state = {
    loginInfo: null
  };

  renderForm() {
    const signUpForm = BusFormFields.map(SignUp => {
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

  submit = async values => {
    console.log("values", values);
    const { company, category, email, password } = values;
    const loginInfo = { company, category, email, password };
    this.setState({
      loginInfo: loginInfo
    });
    // POST REQUEST TO CREATE USER
    const res = await axios.post("/auth/create", loginInfo);
    console.log("res", res);
    // if (res.data === true) {
    //   this.props.history.push("/login");
    // }
  };

  render() {
    // console.log("this.props", this.props);
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
  form: state.form
});

BusSignUpForm = reduxForm({
  form: "signUp" // a unique identifier for this form
})(BusSignUpForm);

export default withRouter(connect(mapStateToProps)(BusSignUpForm));
