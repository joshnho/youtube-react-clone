import React from 'react';
import {Video} from '../../../components/Video/Video';
import {VideoMetadata} from '../../../components/VideoMetadata/VideoMetadata';
import {VideoInfoBox} from '../../../components/VideoInfoBox/VideoInfoBox';
import {RelatedVideos} from '../../../components/RelatedVideos/RelatedVideos';
import './WatchContent.scss';
import {getAmountComments, getRelatedVideos, getVideoById} from '../../../store/reducers/videos';
import {connect} from 'react-redux';
import {getChannel} from '../../../store/reducers/channels';

class WatchContent extends React.Component {
  render() {
    if (!this.props.videoId) {
      return <div/>
    }
    return (
        <div className='watch-grid'>
          <Video className='video' id={this.props.videoId}/>
          <VideoMetadata className='metadata' video={this.props.video}/>
          <VideoInfoBox className='video-info-box' video={this.props.video} channel={this.props.channel}/>
          <RelatedVideos className='related-videos' videos={this.props.relatedVideos}/>
        </div>
    );
  }
  shouldShowLoader() {
    return !!this.props.nextPageToken;
  }
}

function mapStateToProps(state, props) {
  return {
    relatedVideos: getRelatedVideos(state, props.videoId),
    video: getVideoById(state, props.videoId),
    channel: getChannel(state, props.channelId),
    amountComments: getAmountComments(state, props.videoId)
  }
}

export default connect(mapStateToProps, null)(WatchContent);