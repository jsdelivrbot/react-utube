import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props) => {
  const videos = props.videos.map(video => <VideoListItem name = {JSON.stringify(video.snippet.title)} />)
  return (
    <ul className="col-md-4 list-group">
      {videos}
    </ul>
  )
}

export default VideoList
