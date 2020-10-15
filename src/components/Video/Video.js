import React from 'react'
import YouTube from 'react-youtube-embed'
import VideoDetail from "../VideoDetail/VideoDetail"

import style from "./Video.module.scss"


const Video = ({videoId }) => {

    return (
        <div className={style.video} >
            <YouTube id={videoId} />
            <VideoDetail videoId={videoId}/>
        </div>

    )
}

export default Video
