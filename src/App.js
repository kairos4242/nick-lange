import './App.css';
import VideoBg from "./components/VideoBG/VideoBg";
import concertbwmp4 from './videos/concert_bw.mp4'
import poster from "./images/poster.png";
import SidebarParent from './components/SidebarParent'
import PayPalButton from './components/PayPalButton';

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
        <PayPalButton/>
      </header>
    </div>
  );
}

export default App;