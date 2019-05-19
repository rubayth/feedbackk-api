import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                name="$5 for 5 credits"
                description="USE 4242 4242 4242 4242"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE}
                
            >
                <Button variant="info">
                    Add Credits
                </Button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);