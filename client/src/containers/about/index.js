import React,{ Component } from 'react';
import Footer from '../../components/footer/index.js';
import { styles } from './about.css'

class About extends Component {
  render() {
    return (
      <div className='page'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-4'>
        <img className='daniel_image' src='/assets/images/daniel_image.jpg'/>
      </div>
      <div className='col-md-6'>
          <h1>About</h1>
        <p>this is where my info will go</p>
      </div>
    </div>
  </div>
          <Footer />
      </div>





    );
  }
}

export default About;
