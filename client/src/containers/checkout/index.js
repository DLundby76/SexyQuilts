import React, {Component} from 'react';
import {Elements} from 'react-stripe-elements';
import CheckoutForm from '../../components/checkout_form';
import { connect } from 'react-redux';
import Footer from '../../components/footer/index.js';
import PageLayout from '../../components/PageLayout';
class Checkout extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    console.log(' WHAT ARE THE PROPS from Checkout page???', this.props);
    return (
      <PageLayout>
      <div className='page'>
        <h1>checkout</h1>
        <Elements>
          <CheckoutForm {...this.props}/>
        </Elements>

          <Footer />


      </div>
      </PageLayout>

    );
  }
}

export default connect((state) => ({
  itemsToPurchase: state.checkout
}), null)(Checkout);
