import React, { useState, useEffect } from 'react'
import getVideoDetail from '../../services/getVideoDetails'

import { addCommasToNumber } from "../../utils"


const VideoDetail = ({ videoId }) => {

    const [videoData, setVideoData] = useState({
        title: "",
        channelTitle: "",
        description: "",
        viewCount: 0,
    })

    // Loads Video Statistics and Snippet via API
    useEffect(() => {
        getVideoData()
    }, [videoId])

    const getVideoData = async () => {
        var videoDetails = await getVideoDetail(videoId)

        setVideoData({
            title: videoDetails.title,
            channelTitle: videoDetails.channelTitle,
            description: videoDetails.description,
            viewCount: videoDetails.viewCount,
        })
    }

    return (
        <div>
            <div className="row mt-2">
                <div className="col">
                    <h3>
                        {videoData.title}
                    </h3>
                </div>
            </div>
            <div className="row  mt-2">
                <div className="col">
                    {addCommasToNumber(videoData.viewCount)} views
                </div>
            </div>
            <hr ></hr>
            <div className="row mt-5">
                <div className="col">
                    <strong>{videoData.channelTitle}</strong>
                </div>
            </div>
            <div className="row  mt-2">
                <div className="col">
                    {videoData.description}
                </div>
            </div>
        </div>
    )
}

export default VideoDetail
