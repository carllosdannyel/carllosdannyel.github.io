import React, { Component } from "react";
import "./index.css";

export default class Home extends Component {
  state = {
    name: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = () => {};

  render() {
    const { name } = this.state;
    return (
      <div className="wellcome-container">
        <div className="wellcome-description">
          <h2>Wellcome to my</h2>
          <h1>PORTFOLIO</h1>
        </div>
        <div className="wellcome-form">
          <form>
            <label htmlFor="input-name">
              <input
                name="name"
                id="input-name"
                value={name}
                type="text"
                placeholder="Digite seu nome"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="input-button">
              <input id="input-button" type="button" value="ENTRAR" />
            </label>
          </form>
        </div>
      </div>
    );
  }
}
