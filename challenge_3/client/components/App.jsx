import React from "react";
import Selection from "./Selection.jsx";
import Scores from "./Scores.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scores: [], number: 0 };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(num) {
    this.setState({ number: num });
  }

  handleEnter(input) {
    let newScore = this.state.scores.slice();
    newScore.push(input);
    this.setState({ scores: newScore, number: 0 });
  }

  render() {
    return (
      <div>
        <div>Bowling Score Keeper</div>
        <div>Scores: {this.state.scores.join(", ")}</div>
        <Scores scores={this.state.scores} />
        <Selection
          handleEnter={this.handleEnter}
          handleClick={this.handleClick}
          number={this.state.number}
        />
      </div>
    );
  }
}

export default App;
