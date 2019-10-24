import React from 'react';
import {VideoPreview} from '../VideoPreview/VideoPreview';
import './RelatedVideos.scss';

export function RelatedVideos(props) {
  if (!props.videos || !props.videos.length) {
    return <div className='related-videos'/>;
  }

  // safe because before we check if the array has at least one element
  const remainingVideos = props.videos.slice(1);

  const relatedVideosPreviews = remainingVideos.map(relatedVideo => (
      <VideoPreview video={relatedVideo}
                    key={relatedVideo.id}
                    pathname='/watch'
                    search={`?v=${relatedVideo.id}`}
                    horizontal={true}/>
  ));

  return (
    <div className='related-videos'>
      {relatedVideosPreviews}
    </div>
  );
}