import React, {Component} from 'react'
import CloseIcon from '@mui/icons-material/Close';

class Popup extends Component {
    
    constructor (props) {
        super(props);

        this.state = {
            trigger: false
        }
    }

    componentWillReceiveProps(props) {
        this.setState({ trigger: props.trigger })
      }

    triggerPopup = () => {
        this.setState({trigger: true})
    }

    render () {
        return (this.state.trigger) ? (
            <div className="popup">
                <div className="popup-inner">
                    <div className="close-btn">
                        <CloseIcon sx={{ color: '#3970A6' }} onClick={() => this.setState({trigger: false})}/>
                    </div>
                    {this.props.children}
                </div>
            </div>        
        ) : "";//if trigger is true returns the element otherwise returns an empty string <button className="close-btn" onClick={() => this.setState({trigger: false})}>X</button>
    }
};

export default Popup;