import React, {Component} from 'react';
import ShopItem from '../../components/shopItem';
import shopData from './shopdata';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state={
      quilts: [],
      loading: true
    }

  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        quilts: shopData,
        loading: false
      })
    },1000)

  }
  render() {
    if(this.state.loading){
      return (
        <div>loading...</div>
      )
    }
    return (
      <div>{this.state.quilts.map((quilt) =>{
        return(
          <ShopItem key={quilt.id} quilt={quilt}/>
        )
      })}</div>



    );
  }
}

export default Shop;
