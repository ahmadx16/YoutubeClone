import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar/Navbar'
import videoDataContext, { VideoDataProvider } from "./contexts/videoDataContext"

import searchVideos from "./services/searchVideos"

import "./styles/globalStyles.scss"


function App() {

  const search = async (searchText) => {
    const videoData = await searchVideos(searchText)
    updateVideoData(videoData)
  }
  // initialize the dashboard data with static query
  useEffect(() => {
    search("Bastile")
  }, [])

  const [videoData, setVideoData] = useState("")
  const updateVideoData = (newVideoData) => {
    setVideoData(newVideoData);
  }

  return (
    <VideoDataProvider value={{ videoData: videoData, updateVideoData: updateVideoData }}>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard} />
        </Switch>
      </Router>
    </VideoDataProvider>
  );
}

export default App;
