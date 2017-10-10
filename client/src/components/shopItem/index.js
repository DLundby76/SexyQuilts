import React from 'react';

class ShopItem extends React.Component {
  render() {
    console.log("i'm the quilt", this.props.quilt);
    return (
      <div className='row' >
        <div className="col-lg-6">
          <img src={this.props.quilt.image_url} style={{width: '50%'}}/>
        </div>
        <div className='col-lg-6 pull-right'>
          <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputFile">File input</label>
            <input type="file" id="exampleInputFile" />
            <p className="help-block">Example block-level help text here.</p>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" /> Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>

      </div>
    );
  }
}

export default ShopItem;
