import React, {Component} from 'react';
import logo from '../images/music.png'
import logo_white from '../images/music_white.png'
import Popup from './Popup';

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
        //this.popupRef.current.triggerPopup()
        window.open("https://linktr.ee/NickLange", '_blank');
    }

    render () {
        return (
            <div className="soundcloud-icon">
                <Popup ref={this.popupRef} trigger={false}>
                    <stylized>mmh mmh mmh mmh mhh</stylized>
                </Popup>
                <img 
                className="soundcloud" 
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