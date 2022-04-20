import React, {Component} from 'react';
import RightBarMusicButton from './RightBarMusicButton';
import RightBarLiveShowsButton from './RightBarLiveShowsButton';
import RightBarContactButton from './RightBarContactButton';
import RightBarStoreButton from './RightBarStoreButton';

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
                <RightBarMusicButton />
                <RightBarLiveShowsButton />
                <RightBarStoreButton />
                <RightBarContactButton />
            </div>
        )
    }

    handleClick = () => {
        //this.popupElement.current.triggerPopup()
        //alert("HandleClick used")
    }
};

export default RightBarThings;