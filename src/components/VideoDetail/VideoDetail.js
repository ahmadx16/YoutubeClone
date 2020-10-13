import React from 'react'
import YouTube from 'react-youtube-embed'
import style from "./VideoDetail.module.scss"


const VideoDetail = ({ videoId }) => {

    return (

        <div className={style.video} >
            <YouTube id={videoId} />
        </div>

    )
}

export default VideoDetail
