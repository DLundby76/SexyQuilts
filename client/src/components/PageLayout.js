import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
const PageLayout = ({children}) => {
  return (
    <div>
      <Navbar/>
    <div id="content-wrapper">
      {children}
    </div>
    <Footer/>
  </div>
  );
};

export default PageLayout;
