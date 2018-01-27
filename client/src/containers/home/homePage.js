import React, { Component } from 'react';
import Footer from '../../components/footer/index.js';
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
        <div className='page' id="page-content">
          <div  className="jumbotron logo-background">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>These are not your grandmother's quilts.</h2>
          </div>
          {this.state.users.map(user =>
            <div key={user.id}>
              {user.username}

            </div>)}

            <Footer />
          </div>
      </PageLayout>
    );
  }
}

export default Home;
