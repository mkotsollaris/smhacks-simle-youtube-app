import React from "react";
import SearchBar from "./SearchBar";
import VideoRenderer from "./VideoRenderer";
import YTSearch from 'youtube-api-search'
import {API_KEY} from './_PRIVATE_CONFIG'

class Browser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: undefined
    };
  }

  setInputState(event) {
    this.setState({ term: event.target.value });
  }

  onVideoSelectClick = (video) => {

  }

  onSearchHandler = (searchTerm) => {
    console.log('searchTerm: ',searchTerm);
    var url = 'https://www.googleapis.com/youtube/v3/search';
    var params = {
        part: 'snippet',
        key: API_KEY,
        q: searchTerm
    };
    console.log('this:',this);
    YTSearch({key: API_KEY, term: searchTerm}, videos => {
      this.setState({
        videos: videos
      })
    });
}

  render() {
    return (
      <div>
        <SearchBar onChange={this.onSearchHandler}/>
        <VideoRenderer videos={this.state.videos}/>
      </div>
    );
  }
}

export default Browser;
