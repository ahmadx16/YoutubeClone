import React from 'react'
import "./VideoCard.scss"

const VideosCard = ({ title, channelTitle, thumbnailSrc }) => {

    return (
            <div className="card" style={{minWidth: "18rem"}} >
                <img className="card-img-top" src={thumbnailSrc} alt="Image" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"><small>{channelTitle}</small></p>
                </div>
            </div>
    )
}

export default VideosCard
