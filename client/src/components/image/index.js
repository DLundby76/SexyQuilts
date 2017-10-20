import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    console.log('we are the props', this.props.insta.images.standard_resolution.url);
    return (
      <div className={this.props.index === 0 ? "item active" : "item"}>
        <img src={this.props.insta.images.standard_resolution.url} alt="" />
        <div className="carousel-caption" >

        </div>
      </div>

    );
  }
}

export default Image;
