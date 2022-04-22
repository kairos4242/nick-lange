import React, {Component} from 'react';
import InfoIcon from '@mui/icons-material/Info'
import Popup from './Popup'

class InfoButton extends Component {

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
        //window.open("mailto:nlangemusic@gmail.com");
    }

    render () {
        return (
            <div className="soundcloud-icon">
                <Popup ref={this.popupRef} trigger={false}>
                    <div className="contact-lower">
                        <montserrat-mid>Site by Riley Ward</montserrat-mid>
                    </div>
                    
                </Popup>
                <div className="info-btn">
                    <InfoIcon 
                    sx={{ 
                        color: '#3970A6',
                        "&:hover": { color: "#FFFFFF" }
                    }} 
                    onClick={() => (this.handleClick())}
                    />
                </div>
            </div>
        )
    }
};

export default InfoButton;