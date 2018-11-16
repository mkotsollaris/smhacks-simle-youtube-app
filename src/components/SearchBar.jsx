import React, { Component } from "react";


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }


  updateSearchTerm(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  getRequest() {
    this.props.onChange(this.state.searchTerm);
}

  render() {
    return (
      <div>
        <div className="center">
          <input className="search-bar-div" value={this.state.searchTerm} onChange={e => this.updateSearchTerm(e)}/>
          <button
            className="search-button" onClick={() => this.getRequest()}>
            Search
          </button>
        </div>
      </div>
    );
  }
}
export default SearchBar;
