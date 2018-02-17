import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import Menu  from 'react-icons/lib/md/menu';
import  '../styles/style.css';

// <nav>
//
//   <div classNameName= 'container-fluid'>
//     <div classNameName='navContainer' id="sideNav">
//       <div classNameName=' home-logo'>
//         <NavLink classNameName='' to='/'>Home</NavLink>
//       </div>
//       <div classNameName='nav-links-container'>
//         <NavLink classNameName='nav-Links' to='/shop'>Shop</NavLink>
//         <NavLink classNameName='nav-Links' to='/contact'>Contact</NavLink>
//         <NavLink classNameName='nav-Links' to='/checkout'>Checkout</NavLink>
//       </div>
//
//     </div>
//     <Menu classNameName="menu-Icon" id="menuIcon" size={30} color='white'/>
//   </div>
// </nav>

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
        sideNav.removeAttribute('style');

      }
    })
    // menuIcon.addEventListener('click',() =>{
    //   console.log('We are CLICKINGTHE ICON!');
    //   console.log('click', sideNav.style.width);
    //   if (!sideNav.style.width || sideNav.style.width === '0px'){
    //     sideNav.style.width='250px'
    //     sideNav.className = 'navContainer responsive'
    //
    //   } else {
    //     sideNav.style.width='0px'
    //   }
    // })

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
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">home-logo</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">        
              <li><NavLink classNameName='nav-Links' to='/shop'>Shop</NavLink></li>
              <li><NavLink classNameName='nav-Links' to='/contact'>Contact</NavLink></li>
              <li><NavLink classNameName='nav-Links' to='/checkout'>Checkout</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>


    );
  }
}

export default Navbar;
