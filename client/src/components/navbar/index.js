import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

const styles= {
  container: {
    backgroundColor:'#444'
  },
  navText:{
    color:'#e12d98',
    fontSize: 18
  },
  navContainer:{
    display: 'flex',
    'flex-direction': 'row',
    'justify-content' : 'space-between',
    width: '500px',
    'margin-right': 0,
    float: 'right'



  }

}
class Navbar extends Component {
  render() {
    return (
      <div className= 'container-fluid' style={styles.container}>
        <div className='navContainer' style={styles.navContainer}>
        <NavLink style={styles.navText} to='/'>Home</NavLink>
        <NavLink style={styles.navText} to='/about'>About</NavLink>
        <NavLink style={styles.navText} to='/shop'>Shop</NavLink>
        <NavLink style={styles.navText} to='/contact'>Contact</NavLink>
        <NavLink style={styles.navText} to='/checkout'>Checkout</NavLink>

      </div>
    </div>

    );
  }
}

export default Navbar;
