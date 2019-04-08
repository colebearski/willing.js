import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Appbar from "./components/layout/Appbar";
import Main from "./components/section/Main";
import Profile from "./components/section/Profile";
import Work from "./components/section/Work";
import Contact from "./components/section/Contact";

// CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Appbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="" component={Profile} />
            <Route exact path="" component={Work} />
            <Route exact path="" component={Contact} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
