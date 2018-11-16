import React from "react";
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';

function VideoRenderer(props) {
  return (
    <div className="margin-all">
    <div>
      <div>
          <VideoPlayer videoId={'BPJ4MBfjbCQ'}/>
      </div>
      <div>
          <VideoList videos={props.videos}/>
      </div>
      </div>
    </div>
  );
}

export default VideoRenderer;
