import logo from './logo.svg';
import './App.css';
import BackgroundVideo from './components/BackgroundVideo';
import VideoBg from "reactjs-videobg";
import samplemp4 from './videos/sample.mp4'
import beeplemp4 from './videos/beeple.mp4'
import deathpactmp4 from './videos/deathpact.mp4'
import poster from "./images/poster.png";
import SocialMediaIcons from './components/SocialMediaIcons';
import SocialMediaIconsSeparate from './components/SocialMediaIconsSeparate';
import RightBarThings from './components/RightBarThings';
import Popup from './components/Popup'
import {useState } from 'react';
import SidebarParent from './components/SidebarParent'



function App() {
  return (
    <div className="App">
      <VideoBg poster={poster}>
        <VideoBg.Source src={deathpactmp4} type="video/mp4" />
      </VideoBg>
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          <stylized> {/*NICK LANGE*/} </stylized>
        </p>
        <SidebarParent/>
      </header>
      
    </div>
  );
}

export default App;
