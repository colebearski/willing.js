import React, { Component, Fragment } from "react";
import Strategy from "../../images/thinking.png";
import Ux from "../../images/web-design.png";
import Engineer from "../../images/startup.png";
import MySQL from "../../images/mysql.png";
// Core
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    flexGrow: 1
  },
  card: {
    padding: "20px",
    height: 300,
    width: 400
  },
  cardImage: {
    float: "left",
    marginRight: "20px",
    width: "15%"
  },
  cardText: {
    fontSize: "1em",
    color: "rgb(110, 120, 134)",
    paddingLeft: 50,
    marginTop: 40,
    maxWidth: 300,
    lineHeight: 1.6
  },
  profileHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "30",
    textAlign: "center",
    paddingTop: "20px"
  },
  p: {
    fontSize: "1.2em",
    marginBottom: 40,
    marginTop: 20,
    maxWidth: 800,
    color: "rgb(110, 120, 134)",
    textAlign: "center"
  },
  p2: {
    fontSize: "2em",
    fontWeight: "500",
    color: "rgb(110, 120, 134)"
  },
  banner: {
    textAlign: "center",
    padding: 30,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
};

class Profile extends Component {
  render() {
    return (
      <Fragment>
        <div style={styles.profileHeader}>
          <Typography variant="display2">Thought House</Typography>
          <Typography style={styles.p}>
            The software engineer is a creator of universes for which he alone
            is responsible. Universes of virtually unlimited complexity can be
            created in the form of software programs.
          </Typography>
        </div>

        <Grid container style={styles.root}>
          <Grid item xs={12}>
            <Grid container justify="center">
              <div style={styles.card}>
                <img src={Strategy} style={styles.cardImage} alt="strategy" />
                <Typography variant="display1">Strategy</Typography>
                <p style={styles.cardText}>
                  I collaborate with clients and peers to nurture and transform
                  ideas into well though out design specs. I also help project
                  managers identify specific criteria for measuring and
                  accounting.
                </p>
              </div>

              <div style={styles.card}>
                <img src={Ux} style={styles.cardImage} alt="UX/UI" />
                <Typography variant="display1">UX/UI</Typography>
                <p style={styles.cardText}>
                  I sketch and wireframe interfaces focusing on content
                  structures, intuitive UI patterns and simple interactions. I'm
                  a minimalist who truly believes less is more.
                </p>
              </div>

              <div style={styles.card}>
                <img src={Engineer} style={styles.cardImage} alt="Engineer" />
                <Typography variant="display1">Engineer</Typography>
                <p style={styles.cardText}>
                  I have been building in a SERN stack: React, Express, Node,
                  and MySQL. I love coding things from scratch but can work with
                  a variety of librarires and frameworks.
                </p>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <div id="banner" style={styles.banner}>
          <Typography style={styles.p2} component="p">
            {/* Wicked Tech: <span> </span> */}
            <i class="fab fa-js fa-2x" style={{ color: "#f7df1e" }} />
            <span> </span>
            <i class="fab fa-react fa-2x" style={{ color: "#00d8ff" }} />
            <span> </span>
            <i class="fab fa-node fa-2x" style={{ color: "#6cc24a" }} />
            <span> </span>
            {/* <img src={MySQL} style={{ width: "15%" }} alt="mysql" /> */}
            <i class="fab fa-html5 fa-2x" style={{ color: "#e34f26" }} />
            <span> </span>
            <i class="fab fa-css3-alt fa-2x" style={{ color: "#3B5998" }} />
            <span> </span>
            <i class="fab fa-php fa-2x" style={{ color: "#4f5b93" }} />
            <span> </span>
            <i class="fab fa-github fa-2x" style={{ color: "#333" }} />
            <span> </span>
            {/* <i class="fab fa-gitlab" style={{ color: "#fc6d26" }} />
            <span> </span> */}
            <i class="far fa-code-merge fa-2x" style={{ color: "#F1502F" }} />
            <span> </span>
          </Typography>
        </div>
      </Fragment>
    );
  }
}

export default Profile;
