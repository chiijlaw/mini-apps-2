import React from "react";
import axios from "axios";
import Chart from "./Chart.jsx";
import Dates from "./Dates.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { start: "2013-09-01", end: "2017-09-01", data: {} };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        `https://api.coindesk.com/v1/bpi/historical/close.json?start=${
          this.state.start
        }&end=${this.state.end}`
      )
      .then(data => {
        this.setState({ data: data.data.bpi });
      })
      .catch(err => console.log(err));
  }

  handleChange(event, target) {
    this.setState({ [target]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .get(
        `https://api.coindesk.com/v1/bpi/historical/close.json?start=${
          this.state.start
        }&end=${this.state.end}`
      )
      .then(data => {
        this.setState({ data: data.data.bpi });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div>Cryptocurrency Charting Tool</div>
        <Dates
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Chart data={this.state.data} />
      </div>
    );
  }
}

export default App;
