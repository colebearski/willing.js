import React, { Component, Fragment } from "react";
import gundam from "../../images/gundam.png";
import Strategy from "../../images/thinking.png";

// Core
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

const styles = {
  root: {
    flexGrow: 1
  },
  container: {
    backgroundColor: "#eee",
    padding: "100px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  header: {
    textAlign: "center"
  },
  experiencedContainer: {
    padding: "50px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  client: {
    margin: "0 50px"
  },
  h1: {
    fontSize: "2.5em",
    margin: "60px 0 20px 0",
    textAlign: "center"
  },
  card: {
    maxWidth: 400,
    margin: "20px"
  },
  media: {
    // height: 0,
    // paddingTop: "56.25%" // 16:9
  },
  banner: {
    textAlign: "center",
    padding: 30,
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  p: {
    color: "#fff",
    fontSize: "2em",
    fontWeight: "500"
  },
  learn: {
    color: "#fff",
    borderColor: "#fff",
    padding: "10px 50px",
    maxWidth: "200px",
    marginTop: "20px"
  }
};

class Work extends Component {
  render() {
    return (
      <Fragment>
        <div style={styles.container}>
          <Typography style={styles.header} variant="display2">
            Production
          </Typography>
          <div style={styles.experiencedContainer}>
            <Card style={styles.card} elevation={24}>
              <CardMedia src={Strategy} />
              <img
                src={Strategy}
                style={styles.media}
                alt="Something awesome"
              />
              <CardContent>
                <Typography component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  asperiores?
                </Typography>
              </CardContent>
            </Card>

            <Card style={styles.card} elevation={24}>
              <CardMedia src={Strategy} />
              <img
                src={Strategy}
                style={styles.media}
                alt="Something awesome"
              />
              <CardContent>
                <Typography component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  asperiores?
                </Typography>
              </CardContent>
            </Card>

            <Card style={styles.card} elevation={24}>
              <CardMedia src={Strategy} />
              <img
                src={Strategy}
                style={styles.media}
                alt="Something awesome"
              />
              <CardContent>
                <Typography component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  asperiores?
                </Typography>
              </CardContent>
            </Card>

            <Card style={styles.card} elevation={24}>
              <CardMedia src={Strategy} />
              <img
                src={Strategy}
                style={styles.media}
                alt="Something awesome"
              />
              <CardContent>
                <Typography component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  asperiores?
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Work;
