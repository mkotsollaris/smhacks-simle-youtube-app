import React from 'react';

function VideoItem(props) {
    return <div>
        <img alt={props.img.title} src={props.img.src}/>
        <span>{props.img.title}</span>
    </div>
}

export default VideoItem;