import React, {Component} from 'react';
import beatstars from '../images/beatstars.png'
import beatstars_white from '../images/beatstars_white.png'

class BeatstarsButton extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        }
    }

    render () {
        return (
            <div className="soundcloud-icon">
                <a href="https://www.beatstars.com/nickjlange">
                    <img 
                    className="soundcloud" 
                    alt="beatstars" 
                    src={beatstars}
                    onMouseOver={e => (e.currentTarget.src = beatstars_white)} 
                    onMouseOut={e => (e.currentTarget.src = beatstars)}
                    />
                </a>
            </div>         
        )
    }
};

export default BeatstarsButton;