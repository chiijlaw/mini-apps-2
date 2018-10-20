import React, { Component } from "react";
import "./App.css";
import Score from "./components/Score.jsx";
import store from "./redux/store";
import Minefield from "./components/Minefield";

class App extends Component {
  render() {
    console.log(store.getState());
    return (
      <div className="App">
        Can I delete this stuff?
        {/* <button
          onClick={() => store.dispatch({ type: "SET_FILTER", payload: "x" })}
        >
          Click on this!
        </button> */}
        {/* <div>State: {JSON.stringify(store.getState())}</div> */}
        <div>
          <Score />
          <Minefield />
        </div>
      </div>
    );
  }
}

export default App;
