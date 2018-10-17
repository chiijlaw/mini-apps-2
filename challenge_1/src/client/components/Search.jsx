import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    let { handleSearch } = this.props;
    return (
      <form onSubmit={event => handleSearch(event, this.state.text)}>
        <label>
          Search:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Search;
