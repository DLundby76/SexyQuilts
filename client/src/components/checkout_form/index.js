import React, {Component} from 'react';
import {injectStripe, CardElement} from 'react-stripe-elements';
import './checkout.css';

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
      <div className={'col-lg-12'}>
        <div className={'col-lg-6'}>
          {this.props.itemsToPurchase.purchasedItems.map((item) => {
            return (
              <div>
                <img src={item.image_url}/>
                <p style={{color: 'black'}}>{item.model}</p>
            </div>
            )
          })}
        </div>
        <div className='col-lg-6 pull-right'>
          <form onSubmit={this.handleSubmit}>
            <CardElement className='custom-stripe-element' style={{base: {fontSize: '18px' }, }}/>
            <button type='submit'>submit</button>
          </form>
        </div>

      </div>


    );
  }
}

export default injectStripe(CheckoutForm);
