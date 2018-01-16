import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import Menu  from 'react-icons/lib/md/menu';
import  '../styles/style.css';

class Navbar extends Component {
  constructor() {
    super();
    this.toggleMenu=this.toggleMenu.bind(this)
  }
  toggleMenu(e) {
    const navLinks = document.getElementsByClassName('navContainer')
    Array.from(navLinks).map(el =>{
        console.log('our navLinks', el.className);
        if (el.className == 'navContainer') {
          el.className += ' responsive';
        } else {
          el.className = 'navContainer'
        }
    })

  }
  render() {
    return (
      <div className= 'container-fluid'>
        <div className='navContainer'>
        <NavLink className='nav-Links' to='/'>Home</NavLink>
        <NavLink className='nav-Links' to='/about'>About</NavLink>
        <NavLink className='nav-Links' to='/shop'>Shop</NavLink>
        <NavLink className='nav-Links' to='/contact'>Contact</NavLink>
        <NavLink className='nav-Links' to='/checkout'>Checkout</NavLink>

      </div>
      <Menu className="menu-Icon" size={30} color='white' onClick={(e) => this.toggleMenu(e)}/>
    </div>

    );
  }
}

export default Navbar;
