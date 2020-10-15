import React, { useState, useEffect } from 'react'
import getVideoDetail from '../../services/getVideoDetails'


const VideoDetail = ({ videoId }) => {

    const [videoData, setVideoData] = useState({
        title: "",
        channelTitle: "",
        description: "",
        viewCount: 0,
        likeCount: 0,
        dislikeCount: 0
    })

    useEffect(() => {
        getData()
    }, [videoId])

    const getData = async () => {
        var videoDataResponse = await getVideoDetail(videoId)

        console.log(videoDataResponse.data.items[0])
        var videoSnippet = videoDataResponse.data.items[0].snippet

        var videoStatistics = videoDataResponse.data.items[0].statistics
        setVideoData({
            title: videoSnippet.title,
            channelTitle: videoSnippet.channelTitle,
            description: videoSnippet.description,
            viewCount: videoStatistics.viewCount,
            likeCount: videoStatistics.likeCount,
            dislikeCount: videoStatistics.dislikeCount
        })
    }

    return (
        <div>
            <div className="row mt-2">
                <h4>{videoData.title}</h4>
            </div>
            <div className="row  mt-2">
                <div className="col">
                    {videoData.viewCount} views 
                </div>
                <div className="col">
                    <i className="fa fa-thumbs-o-up mr-2"></i>
                    {videoData.likeCount}
                    <i className="fa fa-thumbs-o-down ml-2 mr-2"></i>
                    {videoData.dislikeCount}  
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    {videoData.channelTitle}  
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
