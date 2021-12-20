import React, {Component} from 'react';
import logo from '../images/contact.png'
import logo_white from '../images/contact_white.png'
import Popup from './Popup';

class RightBarContactButton extends Component {
    constructor (props) {
        super(props);

        this.popupRef = React.createRef();
        this.handleClick.bind(this);

        this.state = {
            videoURL: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            showPopup: false
        }
    }

    handleClick = () => {
        //this.popupRef.current.triggerPopup()
        window.open("mailto:nlangemusic@gmail.com", '_blank');
    }

    render () {
        return (
            <div className="soundcloud-icon">
                <Popup ref={this.popupRef} trigger={false}>
                    <stylized>contact donda</stylized>
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

export default RightBarContactButton;