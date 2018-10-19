import React from "react";

class Pins extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pins: "pins" };
  }

  render() {
    return (
      <div>
        <div>{this.state.pins}</div>
      </div>
    );
  }
}

export default Pins;
