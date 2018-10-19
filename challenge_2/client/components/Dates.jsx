import React from "react";

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  render() {
    const { handleSubmit, handleChange } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>Choose Dates for closing prices</div>
            <label>
              Start:
              <input
                type="date"
                id="start"
                name="start"
                placeholder="2013-09-01"
                onChange={e => {
                  handleChange(e, "start");
                }}
              />
            </label>
            <label>
              End:
              <input
                type="date"
                id="end"
                name="end"
                placeholder="2017-09-01"
                onChange={e => handleChange(e, "end")}
              />
            </label>
            <input type="submit" value="Submit" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Dates;
