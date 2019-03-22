import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Home from "./Home";
import Profile from "./Profile";

export default class AppComponent extends React.Component {
  render() {
    return (
      <Router>
        <header>
          <h1>Router Demo</h1>
          <nav>
            <NavLink to="/" exact={true} activeClassName="active-nav-link">
              Home
            </NavLink>
            <NavLink to="/profile" activeClassName="active-nav-link">
              Profile
            </NavLink>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    );
  }
}
