import React, { Component } from "react";
import { connect } from "react-redux";
import { sendNameData } from "../redux/actions";
import "./index.css";

class Index extends Component {
  state = {
    name: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    // const { name } = this.state;
    const { dispatch, history } = this.props;
    dispatch(sendNameData(this.state));
    history.push('/home')
  };

  render() {
    const { name } = this.state;
    console.log(this.props);
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
              <input
                id="input-button"
                type="button"
                value="ENTRAR"
                onClick={this.handleClick}
              />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(Index);
