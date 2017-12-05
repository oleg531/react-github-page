import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import PublicContributions from "./components/public-contributions/public-contributions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PublicContributions />
      </div>
    );
  }
}

export default App;
