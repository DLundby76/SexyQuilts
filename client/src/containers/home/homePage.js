import React, { Component } from 'react';
import Carousel from '../../components/carouselComponent/index.js';
import Footer from '../../components/footer/index.js';
import logo from '../../logo.svg';

var homeStyles = {
  backgroundColor: 'blue',
  color: 'white',

}

class Home extends Component {
    constructor(props){
      super(props);
      this.state= {
        users:[]
      }
    }
    componentDidMount(){
      fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({
        users: users
      }))
    }
  render() {
    return (
      <div>
        <div  className="jumbotron" style={homeStyles}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to sexy quilt bitches! Boo yaaaa</h2>
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
