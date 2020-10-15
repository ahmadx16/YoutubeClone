import React, { useState, useContext } from 'react'
import SearchIcon from "../Icons/SearchIcon"
import searchVideos from "../../services/searchVideos"
import VideoDataContext from '../../contexts/videoDataContext';

const SearchForm = () => {

    const updateVideoData = useContext(VideoDataContext).updateVideoData

    const [searchText, setSearchText] = useState("")
    const handleOnSearchTextChange = (e) => {
        setSearchText(e.target.value)
    }
    const handleSearchFormSubmit = async (e) => {
        e.preventDefault();
        const videosData = await searchVideos(searchText)
        updateVideoData(videosData)
    }

    return (
        <form className="form-inline" onSubmit={handleSearchFormSubmit}>
            <input className="form-control"
                type="search"
                placeholder="Search"
                onChange={handleOnSearchTextChange}
                value={searchText}
                />
            <button className="btn btn-primary" type="submit" >
                <SearchIcon />
            </button>
        </form>

    )
}

export default SearchForm
