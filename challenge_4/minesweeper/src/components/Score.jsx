import React from "react";

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = { test: "test" };
  }
  render() {
    return (
      <div>
        <div>{this.state.test}</div>
      </div>
    );
  }
}

export default Score;
