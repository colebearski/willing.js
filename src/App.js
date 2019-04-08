import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Header from "./components/layout/Header";
import Home from "./components/section/Home";
import About from "./components/section/About";
import Projects from "./components/section/Projects";

// CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
