import React, { Component } from "react";
import { Route, Switch, Router } from "react-router-dom";
import { history } from "../store/configureStore";

import Register from "../containers/Register";
import Confirmation from "../containers/Confirmation";
import Forgot from "../containers/Forgot";
import Login from "../containers/Login";
import User from "../containers/User";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route component={ScrollToTop} />
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />

            <Route exact path="/" component={Register} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export default App;
