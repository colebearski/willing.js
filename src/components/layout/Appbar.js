import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

// Core
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
// Icons
import MenuIcon from "@material-ui/icons/Menu";
// Images
import gundam from "../../images/gundam.png";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  list: {
    width: 250
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  logo: {
    height: "50px"
  },
  menuItem: {
    margin: "0 20px",
    color: "#8b0000",
    fontSize: 18,
    textDecoration: "none"
  },
  sidebarItem: {
    textDecoration: "none"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuItems: {
    display: "flex"
  },
  gundamImage: {
    width: "15%"
  }
};

class Appbar extends Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Fragment>
          <AppBar className="AppBar" position="static">
            <Toolbar style={styles.toolbar}>
              {/* Home Image */}
              <Typography variant="title" color="inherit">
                {/* Switch to Link */}
                <a href="/">
                  <img src={gundam} style={styles.gundamImage} alt="CP" />
                </a>
              </Typography>

              {/* // Menu Items */}

              <div style={styles.menuItems}>
                <Typography>
                  <a href="/" className="appbar_items" style={styles.menuItem}>
                    Home
                  </a>
                </Typography>
                <Typography>
                  <a
                    href="/about"
                    className="appbar_items"
                    style={styles.menuItem}
                  >
                    About
                  </a>
                </Typography>
                <Typography>
                  <a
                    href="/work"
                    className="appbar_items"
                    style={styles.menuItem}
                  >
                    Work
                  </a>
                </Typography>
                <Typography>
                  <a
                    href="/contact"
                    className="appbar_items"
                    style={styles.menuItem}
                  >
                    Contact
                  </a>
                </Typography>
              </div>

              <div id="appbar_button">
                <IconButton
                  id="appbar_button"
                  color="inherit"
                  aria-label="Menu"
                >
                  <MenuIcon onClick={this.toggleDrawer("right", true)} />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>

          {/* Mobile  */}
          <Drawer
            anchor="right"
            open={this.state.right}
            onClose={this.toggleDrawer("right", false)}
          >
            <div
              tabIndex={0}
              role="button"
              style={styles.list}
              onClick={this.toggleDrawer("right", false)}
              onKeyDown={this.toggleDrawer("right", false)}
            >
              <List>
                <a href="/" style={styles.sidebarItem}>
                  <ListItem button>
                    <ListItemText primary="Home" />
                  </ListItem>
                </a>
                <Divider />

                <a href="/about" style={styles.sidebarItem}>
                  <ListItem button>
                    <ListItemText primary="About" />
                  </ListItem>
                </a>
                <Divider />

                <a href="/work" style={styles.sidebarItem}>
                  <ListItem button>
                    <ListItemText primary="Work" />
                  </ListItem>
                </a>
                <Divider />

                <a href="/contact" style={styles.sidebarItem}>
                  <ListItem button>
                    <ListItemText primary="Contact" />
                  </ListItem>
                </a>
              </List>
            </div>
          </Drawer>
        </Fragment>
      </div>
    );
  }
}

export default Appbar;
