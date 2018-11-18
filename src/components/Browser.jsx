import React from "react";
import SearchBar from "./SearchBar";
import VideoRenderer from "./VideoRenderer";
import YTSearch from "youtube-api-search";

class Browser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: undefined
    };
  }

  onVideoSelectClick = video => {
    console.log('selected video: ',video);
  };

  onSearchHandler = searchTerm => {
    YTSearch({ key: 'AIzaSyDWUK8BJH9ZPDWW2ZMvX8Hwx-iDu_MJNAo', term: searchTerm }, videos => {
      this.setState({
        videos: videos
      });
    });
  };

  render() {
    return (
      <div>
        <SearchBar onChange={this.onSearchHandler} />
        <VideoRenderer
          onSelect={this.onVideoSelectClick}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default Browser;
