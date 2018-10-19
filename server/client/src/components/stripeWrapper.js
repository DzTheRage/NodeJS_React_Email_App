import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../services/auth/authActions';

class StripeWrapper extends Component {
  render() {
    return (
      <StripeCheckout
        name="NodeJS_React_Email_App"
        description="$5 for email credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(StripeWrapper);
