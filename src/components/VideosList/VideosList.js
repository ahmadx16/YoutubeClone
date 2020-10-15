import React, { useContext } from 'react'
import VideoCard from '../VideoCard/VideoCard'
import VideoDataContext from '../../contexts/videoDataContext';

const VideoList = () => {

    const videosData = useContext(VideoDataContext).videoData
    let listVideos = []
    if (videosData) {
        listVideos = videosData.data.items.map((videoItem) =>
            <VideoCard
                key={videoItem.snippet.channelTitle + videoItem.snippet.title}
                videoId={videoItem.id.videoId}
                title={videoItem.snippet.title}
                channelTitle={videoItem.snippet.channelTitle}
                thumbnailSrc={videoItem.snippet.thumbnails.high.url} 
                
            />
        )
    }
    return (
       listVideos
    )
}

export default VideoList
