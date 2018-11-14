import React from "react";
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';

function VideoRenderer() {
  return (
    <div className="margin-all">
      <div>
          <VideoPlayer/>
      </div>
      <div>
          <VideoList/>
      </div>
    </div>
  );
}

export default VideoRenderer;
