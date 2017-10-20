import React from 'react';

class ShopItem extends React.Component {
  render() {
    console.log("i'm the quilt", this.props.quilt);
    return (
      <div className='row' >
        <div className="col-lg-6">
          <img src={this.props.quilt.image_url} style={{width: '50%'}}/>
          <p style={{ color: '#444'}}>{this.props.quilt.model}</p>
        </div>
        <div className='col-lg-6 pull-right'>
          <form className="form-horizontal">
            <div className="form-group">
              <label for="size" className="col-sm-3 control-label">Size</label>
              <div className="col-sm-6">
                  <select className="form-control">
                    <option>Queen size 60' x 80'</option>
                    <option>Full Size ????</option>
                  </select>
              </div>
            </div>
            <div className="form-group">
              <label for="backing_color" className="col-sm-3 control-label">Backing Fabric Color</label>
              <div className="col-sm-6">
                  <select className="form-control">
                    <option>Red</option>
                    <option>Orange</option>
                    <option>Yellow</option>
                    <option>Green</option>
                    <option>Blue</option>
                    <option>Purple</option>
                    <option>White</option>
                    <option>Black</option>
                    <option>Grey</option>
                  </select>
              </div>
            </div>
          <button type="submit" className="btn btn-primary" onClick={(e) => this.props.addToCart(e, this.props.quilt)}>Add to checkout</button>
          <button type="submit" className="btn btn-info" onClick={(e) => this.props.readyToCheckout(e)}>Ready to checkout</button>
          </form>
        </div>

      </div>
    );
  }
}

export default ShopItem;
