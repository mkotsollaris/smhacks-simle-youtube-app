import React from "react";
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';

function VideoRenderer(props) {
  return (
    <div className="margin-all">
      <div>
          <VideoPlayer videoId={props.selectedVideo}/>
      </div>
      <div>
          <VideoList videos={props.videos}/>
      </div>
    </div>
  );
}

export default VideoRenderer;
