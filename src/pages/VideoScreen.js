import React from 'react'
import Video from "../components/Video/Video"
import VideoList from "../components/VideosList/VideosList"


const VideoScreen = ({ match }) => {

    let videoId = ""
    if (match)
        videoId = match.params.videoId
    return (
        <div className="row">
            <div className="col-8" >
                <Video videoId={videoId} />
            </div>
            <div className="col-4" >
                <span>Up Next</span>
                <VideoList />
            </div>

        </div>

    )
}

export default VideoScreen
