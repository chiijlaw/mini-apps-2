import React from "react";
import Pins from "./Pins.jsx";
import Selection from "./Selection.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { test: "testing" };
  }

  render() {
    return (
      <div>
        <div>Bowling Score Keeper</div>
        <Selection />
        <Pins />
      </div>
    );
  }
}

export default App;
