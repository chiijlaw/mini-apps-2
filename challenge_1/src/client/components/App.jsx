import React from "react";
import ReactPaginate from "react-paginate";
import Entry from "./Entry.jsx";
import Search from "./Search.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], pageIndex: 1, lastSearchTerm: "", pageCount: 1 };
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handleSearch(event, text) {
    if (event) {
      event.preventDefault();
    }
    fetch(
      `http://localhost:3000/events/?q=${text}&_page=${
        this.state.pageIndex
      }&_limit=10`
    )
      .then(data => {
        let totalCount = data.headers.get("x-total-count");
        let pageCount = Math.ceil(totalCount / 10);
        this.setState({ pageCount: pageCount });
        return data.json();
      })
      .then(jsonData => {
        this.setState({
          data: jsonData,
          lastSearchTerm: text
        });
      });
  }

  handlePageClick({ selected }) {
    let properSelected = selected + 1;
    this.setState({ pageIndex: properSelected }, () => {
      this.handleSearch(null, this.state.lastSearchTerm);
    });
  }

  render() {
    const listEntries = this.state.data.map((eventData, index) => {
      return <Entry key={index} data={eventData} />;
    });

    return (
      <div>
        <h1>Hello World!</h1>
        <Search handleSearch={this.handleSearch} />
        {listEntries}
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={<a href="">...</a>}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}

export default App;
