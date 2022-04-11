import React, {Component} from 'react';
import facebook from '../images/facebook.png'
import facebook_white from '../images/facebook_white.png'

class FacebookButton extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        }
    }

    render () {
        return (
            <div className="facebook-icon">
                <a href="https://nicklange.bandcamp.com/music">
                    <img 
                    className="facebook" 
                    alt="facebook" 
                    src={facebook}
                    onMouseOver={e => (e.currentTarget.src = facebook_white)} 
                    onMouseOut={e => (e.currentTarget.src = facebook)}
                    />
                </a>
            </div>
        )
    }
};

export default FacebookButton;