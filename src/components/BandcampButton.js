import React, {Component} from 'react';
import bandcamp from '../images/bandcamp.png'
import bandcamp_white from '../images/bandcamp_white.png'

class BandcampButton extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        }
    }

    render () {
        return (
            <div className="soundcloud-icon">
                <a href="https://nicklange.bandcamp.com/music">
                    <img 
                    className="bandcamp" 
                    alt="bandcamp" 
                    src={bandcamp}
                    onMouseOver={e => (e.currentTarget.src = bandcamp_white)} 
                    onMouseOut={e => (e.currentTarget.src = bandcamp)}
                    />
                </a>
            </div>         
        )
    }
};

export default BandcampButton;