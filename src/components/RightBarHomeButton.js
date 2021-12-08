import React, {Component} from 'react';
import home from '../images/home.png'
import home_white from '../images/home_white.png'
import Popup from './Popup';

class RightBarHomeButton extends Component {
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
                    <stylized>donda chant donda chant</stylized>
                </Popup>
                <img 
                className="soundcloud" 
                alt="soundcloud" 
                src={home}
                onMouseOver={e => (e.currentTarget.src = home_white)} 
                onMouseOut={e => (e.currentTarget.src = home)}
                onClick={() => (this.handleClick())}
                />
            </div>
        )
    }
};

export default RightBarHomeButton;