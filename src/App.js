import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route />
        <Route />
        <Route />
      </Switch>
    );
  }
}
