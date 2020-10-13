import React from 'react'
import VideoDetail from "../components/VideoDetail/VideoDetail"
import VideoList from "../components/VideosList/VideosList"


const Video = () => {

    return (
        <div className="row">
            <div className="col-8" >
                <VideoDetail videoId="F90Cw4l-8NY" />
            </div>
            <div className="col-4" >
               <span>Up Next</span> 
                <VideoList/>
            </div>

        </div>

    )
}

export default Video
