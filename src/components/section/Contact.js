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
    color: "rgb(110, 120, 134)",
    fontSize: "2em",
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
            <i class="fab fa-linkedin fa-3x" />
            <span> </span>
            <i class="fab fa-github fa-3x" />
            <span> </span>
            <i class="fal fa-envelope fa-3x" />
            <span> </span>
          </Typography>
        </div>
      </Fragment>
    );
  }
}

export default Contact;
