import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import Menu  from 'react-icons/lib/md/menu';
import  '../styles/style.css';

class Navbar extends Component {
  constructor() {
    super();
    this.listenForResize=this.listenForResize.bind(this)
  }
  componentDidMount() {
    console.log('WE ARE MOUNTING THENAV');
    this.listenForResize()
    const sideNav = document.getElementById('sideNav');
    const menuIcon = document.getElementById('menuIcon');
    const navLinks = document.getElementsByClassName('navContainer')
    const page = document.getElementById('content-wrapper');
    page.addEventListener('click', () => {
      console.log('Why are WE NOT CLICKING:::::');
      if (sideNav.style.width === '250px') {
        sideNav.style.width = '0px';

      }
    })
    menuIcon.addEventListener('click',() =>{
      console.log('We are CLICKINGTHE ICON!');
      console.log('click', sideNav.style.width);
      if (!sideNav.style.width || sideNav.style.width === '0px'){
        sideNav.style.width='250px'
        sideNav.className = 'navContainer responsive'

      } else {
        sideNav.style.width='0px'
      }
    })

  }
  listenForResize(){
    window.addEventListener('resize', (e) =>{
      let w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

      let h = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

        console.log('resizing', w);
    })
  }
  render() {
    return (
      <div className= 'container-fluid'>
        <div className='navContainer' id="sideNav">
        <NavLink className='nav-Links' to='/'>Home</NavLink>
        <NavLink className='nav-Links' to='/about'>About</NavLink>
        <NavLink className='nav-Links' to='/shop'>Shop</NavLink>
        <NavLink className='nav-Links' to='/contact'>Contact</NavLink>
        <NavLink className='nav-Links' to='/checkout'>Checkout</NavLink>

      </div>
      <Menu className="menu-Icon" id="menuIcon" size={30} color='white'/>
    </div>

    );
  }
}

export default Navbar;
