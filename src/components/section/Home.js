import React, { Component } from "react";

// Components

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
      <div id="content">
        <div id="name">
          <span className="logo">
            <span
              id="c"
              className={"letter " + active}
              onMouseEnter={this.onMouseEnter}
            >
              C
            </span>
            <span
              id="o"
              className={"letter " + activeTwo}
              onMouseEnter={this.onMouseEnterTwo}
            >
              O
            </span>
            <span
              id="l"
              className={"letter " + active}
              onMouseEnter={this.onMouseEnter}
            >
              L
            </span>
            <span
              id="e"
              className={"letter " + activeTwo}
              onMouseEnter={this.onMouseEnterTwo}
            >
              E
            </span>
          </span>

          <span className="logo">
            <span
              id="p"
              className={"letter " + active}
              onMouseEnter={this.onMouseEnter}
            >
              P
            </span>
            <span
              id="e2"
              className={"letter " + activeTwo}
              onMouseEnter={this.onMouseEnterTwo}
            >
              E
            </span>
            <span
              id="d"
              className={"letter " + active}
              onMouseEnter={this.onMouseEnter}
            >
              D
            </span>
            <span
              id="e3"
              className={"letter " + activeTwo}
              onMouseEnter={this.onMouseEnterTwo}
            >
              E
            </span>
            <span
              id="r"
              className={"letter " + active}
              onMouseEnter={this.onMouseEnter}
            >
              R
            </span>
            <span
              id="s"
              className={"letter " + activeTwo}
              onMouseEnter={this.onMouseEnterTwo}
            >
              S
            </span>
            <span
              id="e4"
              className={"letter " + active}
              onMouseEnter={this.onMouseEnter}
            >
              E
            </span>
            <span
              id="n"
              className={"letter " + activeTwo}
              onMouseEnter={this.onMouseEnterTwo}
            >
              N
            </span>
          </span>
        </div>

        <p>I really like writing code.</p>
        <p>Especially in JavaScript.</p>
      </div>
    );
  }
}

export default Home;
