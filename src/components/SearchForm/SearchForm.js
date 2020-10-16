import React, { useState, useContext } from 'react'
import {useHistory} from "react-router-dom"
import searchVideos from "../../services/searchVideos"
import VideoDataContext from '../../contexts/videoDataContext';

const SearchForm = () => {

    let history = useHistory()
    const updateVideoData = useContext(VideoDataContext).updateVideoData

    const [searchText, setSearchText] = useState("")
    const handleOnSearchTextChange = (e) => {
        setSearchText(e.target.value)
    }
    const handleSearchFormSubmit = async (e) => {
        e.preventDefault();
        const videosData = await searchVideos(searchText)
        if (videosData.error) {
            alert(videosData.error)
            return
        }
        updateVideoData(videosData)
        
        // navigate to dashboard
        history.push("/")
    }

    return (
        <form className="form-inline" onSubmit={handleSearchFormSubmit}>
            <input className="form-control"
                type="search"
                placeholder="Search Video"
                onChange={handleOnSearchTextChange}
                value={searchText}
                />
            <button className="btn btn-primary" type="submit" >
                Search
            </button>
        </form>
    )
}

export default SearchForm
