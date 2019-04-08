import React, { Component, Fragment } from "react";

// Core
import Typography from "@material-ui/core/Typography";

const styles = {
  banner: {
    textAlign: "center",
    padding: 30,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  p: {
    color: "#4169e1",
    opacity: "0.9",
    mixBlendMode: "color-burn",
    fontSize: "2.1em",
    fontWeight: "500"
  }
};

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <div id="banner" style={styles.banner}>
          <Typography style={styles.p} component="p">
            Get in Touch <br />
            <a href="//linkedin.com/in/cole-pedersen/" target="_blank">
              {" "}
              <i
                class="fab fa-linkedin fa-3x"
                style={{ color: "#007bb6", padding: "20px", margin: "10px" }}
              />
            </a>
            <span> </span>
            <a href="//github.com/colebearski" target="_blank">
              <i
                class="fab fa-github fa-3x"
                style={{ color: "#333", padding: "20px", margin: "10px" }}
              />
            </a>
            <span> </span>
            <a href="mailto:cole.pedersen@gmail.com?subject=Say Hello!">
              <i
                class="fal fa-envelope fa-3x "
                style={{ color: "#F1502F", padding: "20px", margin: "10px" }}
              />
            </a>
            <span> </span>
          </Typography>
        </div>
      </Fragment>
    );
  }
}

export default Contact;
