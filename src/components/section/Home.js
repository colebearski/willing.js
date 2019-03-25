import React, { Component } from "react";

// Components
import { CSSTransitionGroup } from "react-transition-group";

// CSS
import "./home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      hover: false,
      className: ""
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter = () => {
    this.setState({
      hover: true,
      className: "hovered"
    });
  };

  onMouseLeave = () => {
    this.setState({
      hover: false,
      className: ""
    });
  };

  render() {
    return (
      <div id="content">
        <div id="name">
          <span className="logo">
            <span id="c" className="letter">
              C
            </span>
            <span id="o" className="letter">
              O
            </span>
            <span id="l" className="letter">
              L
            </span>
            <span id="e" className="letter">
              E
            </span>
          </span>

          <span className="logo">
            <span id="p" className="letter">
              P
            </span>
            <span id="e2" className="letter">
              E
            </span>
            <span id="d" className="letter">
              D
            </span>
            <span id="e3" className="letter">
              E
            </span>
            <span id="r" className="letter">
              R
            </span>
            <span id="s" className="letter">
              S
            </span>
            <span id="e4" className="letter">
              E
            </span>
            <span id="n" className="letter">
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
