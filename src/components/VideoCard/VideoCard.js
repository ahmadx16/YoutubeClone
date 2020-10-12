import React from 'react'


const VideosCard = ({title, description, thumbnailSrc}) => {

    return (
        <div className="card" style={{width: 18+"rem", display:"inline-block" }}>
            <img className="card-img-top" src={thumbnailSrc} alt="Image" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default VideosCard
