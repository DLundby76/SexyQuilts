import React from 'react';
import Navbar from './navbar';
const PageLayout = ({children}) => {
  return (
    <div>
      <Navbar/>
    <div id="content-wrapper">
      {children}
    </div>
  </div>
  );
};

export default PageLayout;
