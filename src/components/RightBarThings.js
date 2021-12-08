import React, {Component} from 'react';
import RightBarHomeButton from './RightBarHomeButton';
import RightBarMusicButton from './RightBarMusicButton';
import RightBarLiveShowsButton from './RightBarLiveShowsButton';
import RightBarContactButton from './RightBarContactButton';
import RightBarCreditsButton from './RightBarCreditsButton';

class RightBarThings extends Component {
    constructor (props) {
        super(props);
        this.popupElement = React.createRef();
        this.state = {
            videoURL: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        }
    }

    render () {
        return (
            <div className="right-bar">
                <RightBarHomeButton />
                <RightBarMusicButton />
                <RightBarLiveShowsButton />
                <RightBarContactButton />
                <RightBarCreditsButton />
            </div>
        )
    }

    handleClick = () => {
        //this.popupElement.current.triggerPopup()
        //alert("HandleClick used")
    }
};

export default RightBarThings;