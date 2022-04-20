import React, {Component} from 'react';
import paypal from '../images/paypal.png'
import paypal_white from '../images/paypal_white.png'

class PayPalButton extends Component {

    render () {
        return (
            <div className="paypal-icon">
                <a href="https://www.paypal.com/paypalme/nicklangepresents ">
                    <img 
                    className="paypal" 
                    alt="paypal" 
                    src={paypal}
                    onMouseOver={e => (e.currentTarget.src = paypal_white)} 
                    onMouseOut={e => (e.currentTarget.src = paypal)}/>
                </a>
            </div>
        )
    }
};

export default PayPalButton;