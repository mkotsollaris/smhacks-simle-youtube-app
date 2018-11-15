import React, { Component } from "react";
import { connect } from "react-redux";
import { searchByTerm } from "../actions";
import { bindActionCreators } from "redux";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

  renderSearchKey() {}

  updateSearchTerm(e) {
      console.log('e: ',e.target.value);
    this.setState({
        searchTerm: e.target.value
    });
  }

  render() {
    
    return (
      <div>
        <div className="center">
          <label>Search: </label>
          <input className="search-bar-div" value={this.state.searchTerm} onChange={ e => this.updateSearchTerm(e)}/>
          <button onClick={()=>this.props.searchKey('key')}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchKey: 'mkey'
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchKey: searchByTerm }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
