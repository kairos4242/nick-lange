import React, {Component} from 'react';
import logo from '../images/gallery.png'
import logo_white from '../images/gallery_white.png'
import Gallery from "react-photo-gallery";
import MegaPopup from './MegaPopup';
import {photos} from '../components/Photos.js'

class RightBarGalleryButton extends Component {
    constructor (props) {
        super(props);

        this.popupRef = React.createRef();
        this.handleClick.bind(this);

        this.state = {
            videoURL: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            showPopup: false
        }
    }

    handleClick = () => {
        this.popupRef.current.triggerPopup()
    }

    render () {
        return (
            <div className="gallery-button">
                <MegaPopup ref={this.popupRef} trigger={false}>
                    <Gallery className="gallery-class" photos={photos} direction={"column"} />
                </MegaPopup>
                <img 
                className="right-button" 
                alt="soundcloud"
                src={logo}
                onMouseOver={e => (e.currentTarget.src = logo_white)} 
                onMouseOut={e => (e.currentTarget.src = logo)}
                onClick={() => (this.handleClick())}
                />
            </div>
        )
    }
};

export default RightBarGalleryButton;