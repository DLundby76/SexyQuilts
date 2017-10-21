import React, { Component } from 'react';
import Carousel from '../../components/carouselComponent/index.js';
import Footer from '../../components/footer/index.js';
import logo from '../../logo_final.png';

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
      <div className='page'>
        <div  className="jumbotron" style={homeStyles}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Not your grandmother's quilts.</h2>
        </div>
        {this.state.users.map(user =>
        <div key={user.id}>
          {user.username}

        </div>)}
        <Carousel />
        <Footer />
      </div>
    );
  }
}

export default Home;
