import React, {Component} from 'react';
import InstagramButton from './InstagramButton';
import SoundcloudButton from './SoundcloudButton';
import YoutubeButton from './YoutubeButton';
import BandcampButton from './BandcampButton';
import FacebookButton from './FacebookButton';

class SocialMediaIconsSeparate extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        }
    }

    render () {
        return (
            <div className="social-icons">
                <BandcampButton/>
                <FacebookButton/>
                <InstagramButton/>
                <SoundcloudButton/>
                <YoutubeButton/>
            </div>            
        )
    }
};

export default SocialMediaIconsSeparate;