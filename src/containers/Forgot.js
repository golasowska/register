import React, { Component } from "react";

import FormForgot from "./FormForgot";

import logo from "../assets/images/bbod_basic.svg";

export default class Forgot extends Component {
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
        <div className="row  mt-5">
          <div className="col-md-11 reg light-white-bg">
            <p className="deep-blue card-header-size">
              Please, write your email
            </p>
            <FormForgot history={this.props.history} />
          </div>
        </div>
      </div>
    );
  }
}
