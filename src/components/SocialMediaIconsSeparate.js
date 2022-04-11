import React, {Component} from 'react';
import instagram from '../images/instagram.png'
import soundcloud from '../images/soundcloud.png'
import youtube from '../images/youtube.png'
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
                <FacebookButton/>
                <InstagramButton/>
                <SoundcloudButton/>
                <YoutubeButton/>
                <BandcampButton/>
            </div>            
        )
    }
};

export default SocialMediaIconsSeparate;