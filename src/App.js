import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "./pages";
import Home from "./pages/home";
import Projects from "./pages/projects";
import About from "./pages/about";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/home" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
      </Switch>
    );
  }
}
