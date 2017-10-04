import React, {Component} from 'react';
import {injectStripe, CardElement} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.stripe.createToken({
      name: 'Daniel'
    }).then(({token}) => {
      console.log('we got a token', token);
    })
    .catch((err)=> {
      console.log('motherfucking error', err);
    })
  }
  render() {
    console.log(' WHAT ARE TEH PROPS ON CHECOUT FORM', this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <CardElement />
        <button type='submit'>submit</button>
      </form>


    );
  }
}

export default injectStripe(CheckoutForm);
