import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { reset } from "../actions";

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Please enter an email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address.";
  }

  return errors;
};

class FormForgot extends Component {
  handleFormSubmit = values => {
    this.props.reset(values);
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
          <div className="d-inline">
            <Link to="/">
              <button className="btn-forgot btn-forgot-inverse d-inline text-uppercase ">
                Go back
              </button>
            </Link>
          </div>
          <div className="d-inline">
            <button
              action="submit"
              className="btn-forgot btn-register d-inline text-uppercase"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  validate,
  form: "forgotForm"
})(connect(null, { reset })(FormForgot));
