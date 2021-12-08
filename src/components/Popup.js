import React, {Component} from 'react'

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
                    <button className="close-btn" onClick={() => this.setState({trigger: false})}>X</button>
                    {this.props.children}
                </div>
            </div>        
        ) : "";//if trigger is true returns the element otherwise returns an empty string
    }
};

export default Popup;