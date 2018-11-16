import React from 'react';

function VideoList(props) {
    
    return <div>
        {props.videos && props.videos.map(video => {
            return <div>
                <img alt={video.snippet.title} src={video.snippet.thumbnails.default.url}/>
                {video.snippet.description}
            </div>
        })}
    </div>
}

export default VideoList;