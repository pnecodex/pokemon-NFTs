import React, { Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SideBar from '../Sidebar';
const Layout = (props) => {
  return (
    <div className="wrapper bg-color">
      <Header />
      <SideBar />
      <div className="content-wrapper bg-color">
        <div>{props.children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;