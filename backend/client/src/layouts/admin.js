import React, { Component, Fragment } from "react";
import Footer from "../Components/AdminLayout/Footer";
import Header from "../Components/AdminLayout/Header";
import SideBar from "../Components/AdminLayout/Sidebar";

class Admin extends Component{

  render() {
      return (
        <div className="wrapper">
          <Header />         
          <SideBar/>
          <div className="content-wrapper">
            {this.props.children}
          </div>
          <Footer />
        </div>
      )
  }
}

export default Admin;