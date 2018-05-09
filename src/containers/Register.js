import React, { Component } from "react";

import FormRegister from "./FormRegister";

import logo from "../assets/images/bbod_basic.svg";

export default class Register extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src={logo} alt="bbod_logo" />
          </div>
          <div className="col-md-9 text-center m-auto welcome">
            Welcome to BBOD Trading Platform
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 reg light-white-bg">
            <p className="deep-blue">Register</p>
            <FormRegister history={this.props.history} />
          </div>
          <div className="col-md-5 deep-blue-bg">
            <p className="light-white">Have already an account?</p>
          </div>
        </div>
      </div>
    );
  }
}
