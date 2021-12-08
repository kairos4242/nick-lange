import React, {Component} from 'react';
import youtube from '../images/youtube.png'
import youtube_white from '../images/youtube_white.png'

class YoutubeButton extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        }
    }

    render () {
        return (
            <div className="soundcloud-icon">
                <a href="https://www.youtube.com/channel/UCEtyLEmLfhIeAd5WuFz5l7w">
                    <img 
                    className="youtube" 
                    alt="youtube" 
                    src={youtube}
                    onMouseOver={e => (e.currentTarget.src = youtube_white)} 
                    onMouseOut={e => (e.currentTarget.src = youtube)}
                    />
                </a>
            </div>            
        )
    }
};

export default YoutubeButton;