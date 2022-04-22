import './App.css';
import VideoBg from "./components/VideoBG/VideoBg";
import concertbwmp4 from './videos/concert_bw.mp4'
import poster from "./images/poster.png";
import SidebarParent from './components/SidebarParent'
import PayPalButton from './components/PayPalButton';
import InfoButton from './components/InfoButton';
import { useState,useEffect } from 'react'

function App() {
  const [videoSource, setVideoSource] = useState(concertbwmp4);

  useEffect(() => {
    setVideoSource(concertbwmp4)
  });

  return (
    <div className="App">
      <VideoBg key={videoSource} src={videoSource} poster={poster}>
        <VideoBg.Source src={videoSource} type="video/mp4" />
      </VideoBg>
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          <stylized> {/*NICK LANGE*/} </stylized>
        </p>
        <SidebarParent/>
        <PayPalButton/>
        <InfoButton/>
      </header>
    </div>
  );
}

export default App;