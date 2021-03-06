import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container app-wrapper">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid stackable">
        <div className="ui row">
          <div className="ten wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList
              onVideoSelect={setSelectedVideo}
              videos={videos}
              selectedVideo={selectedVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
