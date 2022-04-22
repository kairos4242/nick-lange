import './App.css';
import VideoBg from "./components/VideoBG/VideoBg";
import concertbwmp4 from './videos/concert_bw.mp4'
import poster from "./images/poster.png";
import SidebarParent from './components/SidebarParent'
import MediaQuery from 'react-responsive'
import PayPalButton from './components/PayPalButton';



function App() {
  return (
    <div className="App">
      <MediaQuery maxWidth={768}>
        <header className="App-header-mobile">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <p>
            <stylized> {/*NICK LANGE*/} </stylized>
          </p>
          <SidebarParent/>
          <PayPalButton/>
        </header>
      </MediaQuery>
      <MediaQuery minWidth={768}>
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
      </MediaQuery>
      
    </div>
  );
}

export default App;