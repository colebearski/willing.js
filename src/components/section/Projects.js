import React, { Component } from "react";
import motoMe from "../../images/moto_me.jpg";

// CSS
import "./../css/projects.css";

class Projects extends Component {
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
  render() {
    let active = this.state.hover ? "hover" : "";
    let activeTwo = this.state.hoverTwo ? "hoverTwo" : "";
    return (
      <div id="banner_projects" className="container">
        <div className="row">
          <div id="content">
            <div id="name">
              <span className="logo">
                <span
                  className={"projectLetter projectLetterName " + active}
                  onMouseEnter={this.onMouseEnter}
                >
                  P
                </span>
                <span
                  className={"projectLetter projectLetterName " + activeTwo}
                  onMouseEnter={this.onMouseEnterTwo}
                >
                  R
                </span>
                <span
                  className={"projectLetter projectLetterName " + active}
                  onMouseEnter={this.onMouseEnter}
                >
                  O
                </span>
                <span
                  className={"projectLetter projectLetterName " + activeTwo}
                  onMouseEnter={this.onMouseEnterTwo}
                >
                  J
                </span>
                <span
                  className={"projectLetter projectLetterName " + active}
                  onMouseEnter={this.onMouseEnter}
                >
                  E
                </span>
                <span
                  className={"projectLetter projectLetterName " + activeTwo}
                  onMouseEnter={this.onMouseEnterTwo}
                >
                  C
                </span>
                <span
                  className={"projectLetter projectLetterName " + active}
                  onMouseEnter={this.onMouseEnter}
                >
                  T
                </span>
                <span
                  className={"projectLetter projectLetterName " + activeTwo}
                  onMouseEnter={this.onMouseEnterTwo}
                >
                  S
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Project cards */}
        <div className="container">
          <div className="row">
            {/* Row One */}
            <div className="col-md-4 col-sm-6">
              <div className="card" style={{ width: "25rem" }}>
                <img
                  src={motoMe}
                  alt="Card image top"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">YO Yo Yo</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti, ipsum!`
                  </p>
                  <a href="" className="btn btn-primary">
                    righteous
                  </a>
                </div>
              </div>
            </div>
            {/* End Row */}
            {/* Row One */}
            <div className="col-md-4 col-sm-6">
              <div className="card" style={{ width: "25rem" }}>
                <img
                  src={motoMe}
                  alt="Card image top"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">YO Yo Yo</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti, ipsum!`
                  </p>
                  <a href="" className="btn btn-primary">
                    righteous
                  </a>
                </div>
              </div>
            </div>
            {/* End Row */}
            {/* Row One */}
            <div className="col-md-4 col-sm-6">
              <div className="card" style={{ width: "25rem" }}>
                <img
                  src={motoMe}
                  alt="Card image top"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">YO Yo Yo</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti, ipsum!`
                  </p>
                  <a href="" className="btn btn-primary">
                    righteous
                  </a>
                </div>
              </div>
            </div>
            {/* End Row */}
            {/* Row One */}
            <div className="col-md-4 col-sm-6">
              <div className="card" style={{ width: "25rem" }}>
                <img
                  src={motoMe}
                  alt="Card image top"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">YO Yo Yo</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti, ipsum!`
                  </p>
                  <a href="" className="btn btn-primary">
                    righteous
                  </a>
                </div>
              </div>
            </div>
            {/* End Row */}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
