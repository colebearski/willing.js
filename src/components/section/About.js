import React, { Component } from "react";
import motoMe from "../../images/moto_me.jpg";

// Components

// CSS
import "./../css/about.css";

class About extends Component {
  state = {
    hover: false,
    hoverTwo: false,
    bio: false,
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

  onMouseEnterBio = () => {
    this.setState({
      bio: !this.state.bio,
      className: "bio"
    });
  };

  render() {
    const imageStyle = {
      width: "50%",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "60px",
      marginBottom: "20px",
      borderRadius: "50%"
      // border: "10px solid orangered"
    };

    let active = this.state.hover ? "hover" : "";
    let activeTwo = this.state.hoverTwo ? "hoverTwo" : "";
    let bioHover = this.state.bio ? "bio" : "";

    return (
      <div id="banner_about" class="container">
        <div className="row">
          <div className="col-md-6">
            <div id="content">
              <div id="name">
                <span className="logo">
                  <span
                    className={"aboutLetter aboutLetterName " + active}
                    onMouseEnter={this.onMouseEnter}
                  >
                    A
                  </span>
                  <span
                    className={"aboutLetter aboutLetterName " + activeTwo}
                    onMouseEnter={this.onMouseEnterTwo}
                  >
                    B
                  </span>
                  <span
                    className={"aboutLetter aboutLetterName " + active}
                    onMouseEnter={this.onMouseEnter}
                  >
                    O
                  </span>
                  <span
                    className={"aboutLetter aboutLetterName " + activeTwo}
                    onMouseEnter={this.onMouseEnterTwo}
                  >
                    U
                  </span>
                  <span
                    className={"aboutLetter aboutLetterName " + active}
                    onMouseEnter={this.onMouseEnter}
                  >
                    T
                  </span>
                </span>

                <span id="tldr" className="logo">
                  <span
                    className={"aboutLetter aboutLetterName " + active}
                    onMouseEnter={this.onMouseEnter}
                  >
                    T
                  </span>
                  <span
                    className={"aboutLetter aboutLetterName " + activeTwo}
                    onMouseEnter={this.onMouseEnterTwo}
                  >
                    L
                  </span>
                  <span
                    className={"aboutLetter aboutLetterName " + active}
                    onMouseEnter={this.onMouseEnter}
                  >
                    ;
                  </span>
                  <span
                    className={"aboutLetter aboutLetterName " + activeTwo}
                    onMouseEnter={this.onMouseEnterTwo}
                  >
                    D
                  </span>
                  <span
                    className={"aboutLetter aboutLetterName " + active}
                    onMouseEnter={this.onMouseEnter}
                  >
                    R
                  </span>
                </span>
              </div>
              <p className="about_para">
                Software Developer at InsideOut Development
              </p>
              <p className="about_para">
                Instructional Staff: Software Development at the University of
                Utah
              </p>
              <p className="about_para">Avid Motocross Recreationist</p>
              <p className="about_para">Gym and Fitness Enthusiast</p>
              <p className="about_para">I have a PitBull named Java</p>
            </div>
          </div>

          <div className="col-md-6">
            <img
              id="about_pic"
              src={motoMe}
              style={imageStyle}
              alt="Header"
              className={bioHover}
              onMouseEnter={this.onMouseEnterBio}
            />
            <p className="about_para">
              I have a couple really cool jobs right now. Currently I'm at
              InsideOut Developnent as a Software Developer working in a SERN
              stack: React, Express, Node, MySQL. I'm also teaching students
              full stack web development at the University of Utah's Coding
              Bootcamp.
            </p>
            <p className="about_para">
              My favorite stack right now is ReactJS and NodeJS. I have also
              worked with VueJS, PHP, Express, MongoDB, PostgreSQL, GraphQL and
              CSS.{" "}
            </p>

            <p className="about_para">
              When I'm not working you can find me riding my KTM, doing my best
              to stay active and in shape, playing with Java, or doing awesome
              stuff.
            </p>

            <p className="about_para">
              I graduated from the University of Utah with a BS in Marketing. I
              was once a professional SEO and made sort of a natural transition
              to Develoment a few years ago.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <span className="techHeader">Technical Skills</span>

            <span className="techSkills">
              <i class="fab fa-js" style={{ color: "#f7df1e" }} />
              <span> </span>
              <i class="fab fa-react" style={{ color: "#00d8ff" }} />
              <span> </span>
              <i class="fab fa-node-js" style={{ color: "#6cc24a" }} />
              <span> </span>
              <i class="fab fa-html5" style={{ color: "#e34f26" }} />
              <span> </span>
              <i class="fab fa-css3-alt" style={{ color: "#3B5998" }} />
              <span> </span>
              <i class="fab fa-github" style={{ color: "#333" }} />
              <span> </span>
              <i class="fab fa-gitlab" style={{ color: "#fc6d26" }} />
              <span> </span>
              <i class="far fa-code-merge" style={{ color: "#F1502F" }} />
              <span> </span>
              <i class="fab fa-php" style={{ color: "#4f5b93" }} />
              <span> </span>
              {/* Express
              MySQL
              sequelize
              MongoDB
              postgresql 
              graphql */}
            </span>
          </div>
        </div>
      </div>

      // Should put a row down here somewhere with all of my proficiencies
    );
  }
}

export default About;
