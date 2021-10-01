import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect, selectedVideo }) => {
  return (
    <div
      className="video-item item"
      onClick={() => onVideoSelect(video)}
      role="link"
      aria-label={video.snippet.title}
      aria-current={
        selectedVideo && video.id.videoId === selectedVideo.id.videoId
          ? 'true'
          : 'false'
      }
      tabIndex="0"
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
