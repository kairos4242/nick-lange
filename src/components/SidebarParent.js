import React, {Component} from 'react';
import SocialMediaIconsSeparate from './SocialMediaIconsSeparate';
import RightBarThings from './RightBarThings';
import Popup from './Popup';

class SidebarParent extends Component {
    
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        }
    }

    render () {
        return (
            <div className="sidebar-parent">
                <SocialMediaIconsSeparate/>
                <RightBarThings/>
            </div>            
        )
    }
};

export default SidebarParent;