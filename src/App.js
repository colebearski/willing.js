import React, { Component } from "react";

// Components
import Header from "./components/layout/Header";
import Home from "./components/section/Home";

// CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div id="banner" className="container">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
