import React, {Component} from 'react';
import {Elements} from 'react-stripe-elements';
import CheckoutForm from '../../components/checkout_form';
import { connect } from 'react-redux';
class Checkout extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    console.log(' WHAT ARE THE PROPS from Checkout page???', this.props);
    return (
      <div>
        <h1>checkout</h1>
        <Elements>
          <CheckoutForm />
        </Elements>
      </div>

    );
  }
}

export default connect((state) => ({
  itemsToPurchase: state.checkout
}), null)(Checkout);
