import React, {useContext} from 'react'
import VideoCard from '../components/VideoCard/VideoCard'
import VideoDataContext from '../contexts/videoDataContext';

const Dashboard = () => {

    const videoData = useContext(VideoDataContext).videoData
    let title, description, thumbnailSrc="";
    if (videoData) {
        console.log(videoData.data.items[0].snippet)
        title = videoData.data.items[0].snippet.title
        description = videoData.data.items[0].snippet.description
        thumbnailSrc = videoData.data.items[0].snippet.thumbnails.high.url
    }

    return (
        <div >
            
            <VideoCard
                title={title}
                description={description}
                thumbnailSrc={thumbnailSrc} />

        </div>
    )
}

export default Dashboard
