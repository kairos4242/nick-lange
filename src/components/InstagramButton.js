import React, {Component} from 'react';
import instagram from '../images/instagram.png'
import instagram_white from '../images/instagram_white.png'

class InstagramButton extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        }
    }

    render () {
        return (
            <div className="insta-icon">
                <a href="https://instagram.com/nlangemusic">
                    <img 
                    className="instagram" 
                    alt="instagram" 
                    src={instagram} 
                    onMouseOver={e => (e.currentTarget.src = instagram_white)} 
                    onMouseOut={e => (e.currentTarget.src = instagram)}/>
                </a>
            </div>            
        )
    }
};

export default InstagramButton;