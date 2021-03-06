import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <div className="row  mt-5">
          <div className="col-md-6 reg light-white-bg">
            <p className="deep-blue card-header-size">Register</p>
            <FormRegister history={this.props.history} />
          </div>
          <div className="col-md-5 deep-blue-bg log align-self-center">
            <p className="light-white card-par-size">
              Have already an account?
            </p>
            <div className="text-center">
              <Link to="/login">
                <button className="btn-register-inverse text-uppercase ">
                  Log In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
