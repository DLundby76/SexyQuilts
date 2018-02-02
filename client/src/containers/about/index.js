import React,{ Component } from 'react';
import Carousel from '../../components/carouselComponent/index.js';
import Footer from '../../components/footer/index.js';
import PageLayout from '../../components/PageLayout';
import { styles } from './about.css'

class About extends Component {
  render() {
    return (
      <PageLayout>
      <div className='page'>
        <div className='container-fluid'>
      </div>
      <div className='col-md-3'>
        <img className='daniel_image' src='/assets/images/daniel_image.jpg'/>
      </div>
          <h1>About</h1>
        <p>this is where my info will go</p>
      </div>
      <div className='col-md-6'>
        <Carousel />
      </div>

          <Footer />
    </PageLayout>





    );
  }
}

export default About;
