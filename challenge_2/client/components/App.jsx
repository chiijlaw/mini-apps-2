import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "test" };
  }

  render() {
    return (
      <div>
        <div>App component</div>
      </div>
    );
  }
}

export default App;
