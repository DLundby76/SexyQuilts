import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

const styles= {
  container: {
    backgroundColor:'#444'
  },
  navText:{
    color:'#e12d98',
    fontSize:'18'
  }
}
class Navbar extends Component {
  render() {
    return (
      <div className= 'container-fluid' style={styles.container}>
        <NavLink style={styles.navText} to='/'>Home</NavLink>
        <NavLink style={styles.navText} to='/about'>About</NavLink>

      </div>

    );
  }
}

export default Navbar;
