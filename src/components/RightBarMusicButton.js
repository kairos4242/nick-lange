import React, {Component} from 'react';
import logo from '../images/music.png'
import logo_white from '../images/music_white.png'
import Popup from './Popup';
import instagram from '../images/instagram.png'
import instagram_white from '../images/instagram_white.png'

import amazon from '../images/music-grid/amazon.png'
import amazon_white from '../images/music-grid/amazon_white.png'
import apple from '../images/music-grid/apple.png'
import apple_white from '../images/music-grid/apple_white.png'
import deezer from '../images/music-grid/deezer.png'
import deezer_white from '../images/music-grid/deezer_white.png'
import shazam from '../images/music-grid/shazam.png'
import shazam_white from '../images/music-grid/shazam_white.png'
import spotify from '../images/music-grid/spotify.png'
import spotify_white from '../images/music-grid/spotify_white.png'
import tidal from '../images/music-grid/tidal.png'
import tidal_white from '../images/music-grid/tidal_white.png'

class RightBarMusicButton extends Component {
    constructor (props) {
        super(props);

        this.popupRef = React.createRef();
        this.handleClick.bind(this);

        this.state = {
            videoURL: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            showPopup: false
        }
    }

    photos = [
        {
          src: 'http://example.com/example/img1.jpg',
          width: 4,
          height: 3
        },
        {
          src: 'http://example.com/example/img2.jpg',
          width: 1,
          height: 1
        }
      ];
       

    handleClick = () => {
        this.popupRef.current.triggerPopup()
        //window.open("https://linktr.ee/NickLange", '_blank');
    }

    render () {
        return (
            <div className="soundcloud-icon">
                <Popup ref={this.popupRef} trigger={false}>
                    <div className="music-wrapper">
                        <a href="https://open.spotify.com/artist/2AqVZIvEhSU9PWPqCotgi1?si=V2e4_lEfQ9maP13DvALN4A">
                            <img 
                            className="music-spotify" 
                            alt="spotify" 
                            src={spotify} 
                            onMouseOver={e => (e.currentTarget.src = spotify_white)} 
                            onMouseOut={e => (e.currentTarget.src = spotify)}/>
                        </a>
                        <a href="https://music.apple.com/ca/artist/nick-lange/573867146">
                            <img 
                            className="music-apple" 
                            alt="apple music" 
                            src={apple} 
                            onMouseOver={e => (e.currentTarget.src = apple_white)} 
                            onMouseOut={e => (e.currentTarget.src = apple)}/>
                        </a>
                        <a href="https://tidal.com/browse/artist/15913733 ">
                            <img 
                            className="music-tidal" 
                            alt="tidal" 
                            src={tidal} 
                            onMouseOver={e => (e.currentTarget.src = tidal_white)} 
                            onMouseOut={e => (e.currentTarget.src = tidal)}/>
                        </a>
                        <a href="https://www.shazam.com/artist/nick-lange/573867146">
                            <img 
                            className="music-shazam" 
                            alt="shazam" 
                            src={shazam} 
                            onMouseOver={e => (e.currentTarget.src = shazam_white)} 
                            onMouseOut={e => (e.currentTarget.src = shazam)}/>
                        </a>
                        <a href="https://www.deezer.com/us/artist/66744862">
                            <img 
                            className="music-deezer" 
                            alt="deezer" 
                            src={deezer} 
                            onMouseOver={e => (e.currentTarget.src = deezer_white)} 
                            onMouseOut={e => (e.currentTarget.src = deezer)}/>
                        </a>
                        <a href="https://music.amazon.ca/artists/B095X941TL/nick-lange?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=CA&ref=dm_sh_r6jy65CYDI3pMWAafuJenspKr">
                            <img 
                            className="music-amazon" 
                            alt="amazon" 
                            src={amazon} 
                            onMouseOver={e => (e.currentTarget.src = amazon_white)}
                            onMouseOut={e => (e.currentTarget.src = amazon)}/>
                        </a>
                    </div>
                </Popup>
                <img 
                className="right-button" 
                alt="soundcloud"
                src={logo}
                onMouseOver={e => (e.currentTarget.src = logo_white)} 
                onMouseOut={e => (e.currentTarget.src = logo)}
                onClick={() => (this.handleClick())}
                />
            </div>
        )
    }
};

export default RightBarMusicButton;