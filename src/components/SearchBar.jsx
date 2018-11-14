import React, { Component } from "react";
import {connect} from 'react-redux'

class SearchBar extends Component {
  renderSearchKey() {}

  render() {
    console.log("props:", this.props);
    return (
      <div>
        <div className="center">
          <label>Search: </label>
          <input className="search-bar-div" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.videos
  };
}

export default connect(mapStateToProps)(SearchBar);
