import React from "react";

function VideoList(props) {
  return (
    <div>
      {props.videos &&
        props.videos.map(video => {
          return (
            <div className="wrapper" onClick={() => this.onVideoSelectClick(video)}>
              <aside className="aside-1 small-margin">
                <div>
                  <img
                    alt={video.snippet.title} src={video.snippet.thumbnails.default.url}
                  />
                </div>
              </aside>
              <aside className="aside-2 small-margin">{video.snippet.description}</aside>
            </div>
          );
        })}
    </div>
  );
}

export default VideoList;
