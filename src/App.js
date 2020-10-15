import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import VideoScreen from './pages/VideoScreen'
import Navbar from './components/Navbar/Navbar'
import { VideoDataProvider } from "./contexts/videoDataContext"

import searchVideos from "./services/searchVideos"

import "./styles/globalStyles.scss"


function App() {
  
  // initialize the dashboard data with static query
  useEffect(() => {
    search("Bastile")
  }, [])
  
  const search = async (searchText) => {
    const videoData = await searchVideos(searchText)
    updateVideoData(videoData)
  }

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
          <Route exact path='/:videoId' component={VideoScreen} />
        </Switch>
      </Router>
    </VideoDataProvider>
  );
}

export default App;
