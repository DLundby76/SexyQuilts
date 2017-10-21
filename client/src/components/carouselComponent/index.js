import React, { Component } from 'react';
import './carousel.css';
import InstaImage from '../image';

class Carousel extends Component {
    constructor(props) {
      super(props)
      this.state = {
        instaphotos: []
      }
    }
    componentDidMount() {
      fetch('/photos/instagram')
      .then((data)=> data.json())
      .then((results)=> {
        console.log(JSON.parse(results));
        const { data } = JSON.parse(results)
        this.setState({
          instaphotos: data
        })

      })
      .catch((err) => {
        console.log(err);
      })
    }


    render() {
      return (
        <div>
          <div className="container-fluid">
            <div id="carousel-generic" className="carousel slide" data-ride="carousel" data-interval='2000'>
              {/* <!-- Indicators --> */}
              {/* <ol className="carousel-indicators">
                <li data-target="#carousel-generic" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-generic" data-slide-to="1"></li>
                <li data-target="#carousel-generic" data-slide-to="2"></li>
              </ol> */}

              {/* <!-- Wrapper for slides --> */}
              <div className="carousel-inner">
                {this.state.instaphotos.map((instaphoto,i)=>{
                  return(
                    <InstaImage
                      key={instaphoto.id}
                      insta={instaphoto}
                      index={i}
                  />
                  )
                })}
                {/* <div className="item active">
                  <img src="/assets/images/iowa-quilt.JPG" alt="" />
                  <div className="carousel-caption" >

                  </div>
                </div>
                <div className="item">
                  <img src="/assets/images/tshirt-quilt.JPG" alt="" />
                  <div className="carousel-caption">

                  </div>
                </div>
                <div className="item">
                  <img src="/assets/images/trans-quilt.JPG" alt="" />
                  <div className="carousel-caption">

                  </div>
                </div> */}

              </div>

              {/* <!-- Controls --> */}
              <a className="left carousel-control" href="#carousel-generic" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
              </a>
              <a className="right carousel-control" href="#carousel-generic" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
              </a>
            </div>
          </div>

        </div>
      )
    }
}
export default Carousel;
