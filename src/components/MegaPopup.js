import React, {Component} from 'react'
import CloseIcon from '@mui/icons-material/Close';

class MegaPopup extends Component {
    
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
            <div className="mega-popup">
                <div className="mega-popup-inner">
                    <CloseIcon sx={{ color: '#FF0000' }} onClick={() => this.setState({trigger: false})}/>
                    {this.props.children}
                </div>
            </div>        
        ) : "";//if trigger is true returns the element otherwise returns an empty string <button className="close-btn" onClick={() => this.setState({trigger: false})}>X</button>
    }
};

export default MegaPopup;