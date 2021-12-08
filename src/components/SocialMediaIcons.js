import React, {Component} from 'react';
import instagram from '../images/instagram.png'
import soundcloud from '../images/soundcloud.png'
import youtube from '../images/youtube.png'

class SocialMediaIcons extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        }
    }

    render () {
        return (
            <div className="social-icons">
                <a href="https://instagram.com/nlangemusic">
                    <img className="instagram" alt="instagram" src={instagram}/>
                </a>
                <a href="https://soundcloud.com/nicklangepresents">
                    <img className="soundcloud" alt="soundcloud" src={soundcloud}/>
                </a>
                <a href="https://www.youtube.com/channel/UCEtyLEmLfhIeAd5WuFz5l7w">
                    <img className="youtube" alt="youtube" src={youtube}/>
                </a>
            </div>            
        )
    }
};

export default SocialMediaIcons;