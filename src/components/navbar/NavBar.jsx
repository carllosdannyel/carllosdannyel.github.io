import React, { Component } from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="projects">Projects</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
