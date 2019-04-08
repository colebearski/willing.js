import React, { Component } from "react";
import Profile from "./Profile";
import Work from "./Work";
import Contact from "./Contact";

// Core
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles";

const styles = {
  root: {
    flexGrow: 1
  },
  svg: {
    transform: "translateY(-80px)"
  },
  h1: {
    fontSize: "4em",
    color: "#4169e1",
    opacity: "0.9",
    mixBlendMode: "color-burn",
    fontWeight: "500",
    lineHeight: "1",
    marginBottom: "20px",
    textAlign: "center"
  },
  p: {
    fontSize: "1em",
    color: "#4169e1",
    mixBlendMode: "color-burn",
    marginBottom: "40px",
    textAlign: "center",
    fontSize: "1.2em"
  },
  learn: {
    color: "#4169e1",
    mixBlendMode: "color-burn",
    borderColor: "#4169e1",
    padding: "20px 50px"
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  logo: {
    height: "50px"
  }
};

class Main extends Component {
  state = {
    showEmail: false
  };

  showEmail = () => {
    this.setState({ showEmail: true });
    console.log("hit");
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Typography id="landing_header" style={styles.h1}>
            Cole Pedersen
          </Typography>
          <Typography style={styles.p}>
            Software Engineer <br />
            I really like coding <br />
            Especially in JavaScript
          </Typography>
          <Button
            style={styles.learn}
            variant="outlined"
            onClick={this.showEmail}
          >
            Say Hello
          </Button>
        </header>
        <Profile />
        <Work />
        <Contact />
      </div>
    );
  }
}

export default Main;
