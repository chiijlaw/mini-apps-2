import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Score from "./components/Score.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        Can I delete this stuff?
        <div>
          <Score />
        </div>
      </div>
    );
  }
}

export default App;
