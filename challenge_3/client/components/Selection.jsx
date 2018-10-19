import React from "react";
import Number from "./Number.jsx";

class Selection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(num) {
    let newNum = this.state.number.toString() + num;
    newNum = parseInt(newNum);
    this.setState({ number: newNum });
  }

  render() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numPad = numbers.map(number => {
      return (
        <Number number={number} key={number} handleClick={this.handleClick} />
      );
    });

    return (
      <div>
        <div>{this.state.number}</div>
        <div>{numPad}</div>
      </div>
    );
  }
}

export default Selection;
