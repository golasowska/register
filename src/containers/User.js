import React, { Component } from "react";

import logo from "../assets/images/bbod_basic.svg";

export default class User extends Component {
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
            <p className="deep-blue card-header-size">Accounts</p>
            <p className="deep-blue card-par-size ">Account ID</p>
          </div>
          <div className="col-md-5 deep-blue-bg log align-self-center">
            <p className="light-white card-header-size">User Data:</p>
            <div className="text-center">
              <button className="btn-register-inverse text-uppercase ">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
