import React, { Component } from "react";
import "./Loading.css";

export default class Loading extends Component {
  render() {
    return (
      <div className="center">
        <span className="ring"></span>
        <span>loading...</span>
      </div>
    );
  }
}
