import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Footer from '../../components/footer/index.js';
import Carousel from '../../components/carouselComponent/index.js';
import logo from '../../logo_final.png';
import PageLayout from '../../components/PageLayout';

var homeStyles = {
  backgroundColor: '#e12d98',
  color: 'black',

}

class Home extends Component {
    constructor(props){
      super(props);
      this.state= {
        users:[]
      }
    }
    // componentDidMount(){
    //   fetch('/users')
    //   .then(res => res.json())
    //   .then(users => this.setState({
    //     users: users
    //   }))
    // }
  render() {
    return (
      <PageLayout>
        <section className=' container-fluid' id="page-content">
          <div  className="col-lg-6 col-sm-12 col-xs-12">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>These are not your grandmother's quilts.</h2>
            <Link to='/shop'>
              Ready to have some fun?
            </Link>
          </div>
          <div className="col-lg-6 col-sm-12 col-xs-12">
            Stuff and things go here
          </div>

        </section>
        <section>
            <div  className="col-lg-6 col-sm-12 col-xs-12">
              <Carousel />
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <Carousel />
            </div>

          </section>

        {/* <Footer /> */}
      </PageLayout>
    );
  }
}

export default Home;
