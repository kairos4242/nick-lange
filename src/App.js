import './App.css';
import VideoBg from "reactjs-videobg";
import concertbwmp4 from './videos/concert_bw.mp4'
import poster from "./images/poster.png";
import SidebarParent from './components/SidebarParent'



function App() {
  return (
    <div className="App">
      <VideoBg poster={poster}>
        <VideoBg.Source src={concertbwmp4} type="video/mp4" />
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
