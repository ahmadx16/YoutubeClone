import React from 'react'
import { useHistory } from 'react-router-dom'
import style from "./VideoCard.module.scss"

const VideosCard = ({ title, videoId, channelTitle, thumbnailSrc }) => {

    let history = useHistory()
    const handleOnCardClick = (e) => {
        history.push("/"+videoId)
    }
    return (
        <div className={style.card} onClick={handleOnCardClick} >
            <img className="card-img-top" src={thumbnailSrc} alt={channelTitle} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text"><small>{channelTitle}</small></p>
            </div>
        </div>
    )
}

export default VideosCard
