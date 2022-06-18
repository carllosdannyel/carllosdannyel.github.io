import React, { Component } from "react";
import Loading from "../../components/loading/Loading";
import NavBar from "../../components/navbar/NavBar";

class About extends Component {
  state = {
    loading: true,
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);
  };

  render() {
    const { loading } = this.state;
    return (
      <div className="about-container">
        {loading ? <Loading /> : <NavBar />}
      </div>
    );
  }
}

export default About;
