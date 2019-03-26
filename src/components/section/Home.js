import React, { Component } from "react";

// Components
// https://www.alispit.tel/#/
// https://codepen.io/aspittel/pen/xPgaGJ
// CSS
import "./home.css";

class Home extends Component {
  state = {
    hover: false,
    hoverTwo: false,
    className: ""
  };

  onMouseEnter = () => {
    this.setState({
      hover: !this.state.hover,
      className: "hover"
    });
  };

  onMouseEnterTwo = () => {
    this.setState({
      hoverTwo: !this.state.hoverTwo,
      className: "hoverTwo"
    });
  };

  // onMouseLeave = () => {
  //   this.setState({
  //     hover: !this.state.hover,
  //     className: ""
  //   });
  // };

  render() {
    let active = this.state.hover ? "hover" : "";
    let activeTwo = this.state.hoverTwo ? "hoverTwo" : "";

    return (
      // <div class="banner_container">
      <div id="content">
        <div id="name">
          <span className="logo">
            <span
              className={"letter letterName " + active}
              onMouseEnter={this.onMouseEnter}
            >
              C
            </span>
            <span
              className={"letter letterName " + activeTwo}
              onMouseEnter={this.onMouseEnterTwo}
            >
              O
            </span>
            <span
              className={"letter letterName " + active}
              onMouseEnter={this.onMouseEnter}
            >
              L
            </span>
            <span
              className={"letter letterName " + activeTwo}
              onMouseEnter={this.onMouseEnterTwo}
            >
              E
            </span>
          </span>

          <span className="logo">
            <span
              className={"letter letterName " + active}
              onMouseEnter={this.onMouseEnter}
            >
              P
            </span>
            <span
              className={"letter letterName " + activeTwo}
              onMouseEnter={this.onMouseEnterTwo}
            >
              E
            </span>
            <span
              className={"letter letterName " + active}
              onMouseEnter={this.onMouseEnter}
            >
              D
            </span>
            <span
              className={"letter letterName " + activeTwo}
              onMouseEnter={this.onMouseEnterTwo}
            >
              E
            </span>
            <span
              className={"letter letterName " + active}
              onMouseEnter={this.onMouseEnter}
            >
              R
            </span>
            <span
              className={"letter letterName " + activeTwo}
              onMouseEnter={this.onMouseEnterTwo}
            >
              S
            </span>
            <span
              className={"letter letterName " + active}
              onMouseEnter={this.onMouseEnter}
            >
              E
            </span>
            <span
              className={"letter letterName " + activeTwo}
              onMouseEnter={this.onMouseEnterTwo}
            >
              N
            </span>
          </span>
        </div>

        <p>Software Engineer</p>
        <p>I really like writing code.</p>
        <p>Especially in JavaScript.</p>
      </div>
      // </div>
    );
  }
}

export default Home;
