import React from 'react';
import YouTube from 'react-youtube';

class VideoPlayer extends React.Component {
    
    render() {
        const opts = {
          height: '390',
          width: '640',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 0
          }
        };
     
        return (
          <YouTube
            videoId={this.props.selectedVideo && this.props.selectedVideo.videoId}
            host='https://www.youtube.com'
            opts={opts}
            onReady={this._onReady}
          />
        );
      }
}

export default VideoPlayer;