import React from 'react';
import './VideoGrid.scss';
import {VideoPreview} from '../VideoPreview/VideoPreview';

export const VideoGrid = (props) => {
  if (!props.videos || !props.videos.length) {
    return <div/>;
  }
  const gridItems = props.videos.map(video => {
    return (<VideoPreview video={video}
                          key={video.id}
                          pathname='/watch'
                          search={`?v=${video.id}`}/>
    );
  });

  return (
    <React.Fragment>
      <div className='video-grid'>
        {gridItems}
      </div>
    </React.Fragment>
  );
}