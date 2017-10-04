import React, {Component} from 'react';
import {Elements} from 'react-stripe-elements';
import CheckoutForm from '../../components/checkout_form';

class Checkout extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    console.log(' WHAT ARE THE PROPS???', this.props);
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

export default Checkout;
