import React, {Component} from 'react';
import soundcloud from '../images/soundcloud.png'
import soundcloud_white from '../images/soundcloud_white.png'

class SoundcloudButton extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        }
    }

    render () {
        return (
            <div className="soundcloud-icon">
                <a href="https://soundcloud.com/nicklangepresents">
                    <img 
                    className="soundcloud" 
                    alt="soundcloud" 
                    src={soundcloud}
                    onMouseOver={e => (e.currentTarget.src = soundcloud_white)} 
                    onMouseOut={e => (e.currentTarget.src = soundcloud)}
                    />
                </a>
            </div>         
        )
    }
};

export default SoundcloudButton;