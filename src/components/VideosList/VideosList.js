import React, { useContext } from 'react'
import VideoCard from '../VideoCard/VideoCard'
import VideoDataContext from '../../contexts/videoDataContext';

const VideoList = () => {

    const videosData = useContext(VideoDataContext).videoData
    let listVideos = []
    if (videosData.length) {
        listVideos = videosData.map((videoItem) =>
            <VideoCard
                key={videoItem.channelTitle + videoItem.title}
                videoId={videoItem.videoId}
                title={videoItem.title}
                channelTitle={videoItem.channelTitle}
                thumbnailSrc={videoItem.thumbnailSrc} 
                
            />
        )
    }
    return (
       listVideos
    )
}

export default VideoList
