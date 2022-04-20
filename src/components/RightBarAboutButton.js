import React, {Component} from 'react';
import logo from '../images/about.png'
import logo_white from '../images/about_white.png'
import Popup from './Popup';

class RightBarAboutButton extends Component {
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
                    <img src="https://i1.sndcdn.com/avatars-TRn9Isnkd4XUNeZX-VK5oTA-t240x240.jpg" alt="monsieur changes" />
                    <montserrat-light-italic><blockquote><p class="quotation"> 
                        If you marry keabruh, you have a monthly subscription to the tax fund</p>
                        <footer><montserrat-light>— Duke John Changes</montserrat-light></footer>
                    </blockquote></montserrat-light-italic>
                    <montserrat-light-italic><blockquote><p class="quotation"> 
                        You can't shower in a hot tub</p>
                        <montserrat-light><footer>— Duke John Changes</footer></montserrat-light>
                    </blockquote></montserrat-light-italic>
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

export default RightBarAboutButton;