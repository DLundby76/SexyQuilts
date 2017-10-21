import React, {Component} from 'react';
import { connect } from 'react-redux';
import ShopItem from '../../components/shopItem';
import shopData from './shopdata';
import { addItemToCart } from '../../actions/checkoutActions';
import Footer from '../../components/footer/index.js';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state={
      quilts: [],
      loading: true
    }
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
  }
  componentDidMount() {
    fetch('/quilts')
    .then((response) => response.json())
    .then((data) => {
      console.log('WE GOT FUCKING QUILTSSSS', data);
      this.setState({ quilts: data.results, loading: false })
    })
    .catch((err) => {
      console.log(' NO QUILTSSSS :()', err);
    })
    // setTimeout(() => {
    //   this.setState({
    //     quilts: shopData,
    //     loading: false
    //   })
    // },1000)

  }
  componentWillReceiveProps(nextProps) {
    console.log(' WHAT ARE THE NEXT PROPS???', nextProps.cartItems);
  }
  handleAddToCart(e, quilt) {
    e.preventDefault();
    console.log(' WE HAVE A QUILT!!!', quilt);
    this.props.addItemToCart(quilt)
  }
  handleCheckout(e) {
    e.preventDefault();
    const { history } = this.props;
    history.push('/checkout')
  }
  render() {
    if(this.state.loading){
      return (
        <div>loading...</div>
      )
    }
    return (
      <div className='page'>{this.state.quilts.map((quilt) =>{
        return(
          <ShopItem
            key={quilt.id}
            quilt={quilt}
            addToCart={this.handleAddToCart}
            readyToCheckout={this.handleCheckout}
          />
        )
      })}
        <Footer />
    </div>



    );
  }
}

export default connect((state) => ({
  cartItems: state.checkout.purchasedItems,
}), (dispatch) => ({
  addItemToCart: (quilt) => dispatch(addItemToCart(quilt)),
}))(Shop);
