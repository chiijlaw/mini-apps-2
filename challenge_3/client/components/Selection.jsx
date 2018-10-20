import React from "react";
import Number from "./Number.jsx";
import Enter from "./Enter.jsx";

class Selection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numPad = numbers.map(number => {
      return (
        <Number
          number={number}
          key={number}
          handleClick={this.props.handleClick}
        />
      );
    });

    return (
      <div>
        <div>Current Score: {this.props.number}</div>
        <div>{numPad}</div>
        <Enter
          handleEnter={this.props.handleEnter}
          number={this.props.number}
        />
      </div>
    );
  }
}

export default Selection;
