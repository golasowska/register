import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login } from "../actions";

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Please enter an email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address.";
  }

  if (!values.password) {
    errors.password = "Please enter a password.";
  }

  return errors;
};

class FormLogin extends Component {
  handleFormSubmit = values => {
    this.props.login(values);
  };

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <fieldset className={`form-group ${touched && error ? "has-error" : ""}`}>
      <label className="control-label">{label}</label>
      <div>
        <input
          {...input}
          placeholder={label}
          className="form-control"
          type={type}
        />
        {touched && error && <div className="help-block">{error}</div>}
      </div>
    </fieldset>
  );

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
          <Field
            name="email"
            type="text"
            component={this.renderField}
            label="Email"
          />
          <Field
            name="password"
            type="password"
            component={this.renderField}
            label="Password"
          />
          <div className="text-center">
            <button action="submit" className="btn-register text-uppercase">
              Log In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  validate,
  form: "loginForm"
})(connect(null, { login })(FormLogin));
