import React, {Component} from 'react';
import logo from '../images/live_shows.png'
import logo_white from '../images/live_shows_white.png'
import Popup from './Popup';

class RightBarLiveShowsButton extends Component {
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
        this.popupRef.current.triggerPopup()
    }

    render () {
        return (
            <div className="soundcloud-icon">
                <Popup ref={this.popupRef} trigger={false}>
                    <span>
                        <montserrat-light>Edmonton.........................</montserrat-light><montserrat-mid>Jan 12th</montserrat-mid><br></br>
                        <montserrat-light>Edmonton.........................</montserrat-light><montserrat-mid>Jan 13th</montserrat-mid><br></br>
                        <montserrat-light>Dead Man's Flats........</montserrat-light><montserrat-mid>Jan 14th</montserrat-mid><br></br>
                        <montserrat-light>Dead Man's Flats........</montserrat-light><montserrat-mid>Jan 14th</montserrat-mid><br></br>
                        <montserrat-light>Bali............................................</montserrat-light><montserrat-mid>Jan 14th</montserrat-mid><br></br>
                    </span>
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

export default RightBarLiveShowsButton;