import React from 'react';
import {NavLink,Link} from 'react-router-dom';
const SideBar = () => {
  return ( 
    <aside className="main-sidebar sidebar-dark-primary elevation-4 bg-color">
    {/* Brand Logo */}
    <a href="#" className="brand-link mypoke-logo">
      <img src="/backend/images/pokemon-logo.png" alt="MyPoke Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
      <span className="brand-text text-light font-weight-bold">MyPoke</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column " data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
       with font-awesome or any other icon font library */}
          
          <li className="nav-item has-treeview menu-open ">
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link"  activeClassName="active">
                  <i className="far fa-circle nav-icon" />
                  <p>Home</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/all-nfts" className="nav-link"  activeClassName="active">
                  <i className="far fa-circle nav-icon" />
                  <p>All NFTs</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/lootbox" className="nav-link"  activeClassName="active">
                  <i className="far fa-circle nav-icon" />
                  <p>Lootbox</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/referral" className="nav-link"  activeClassName="active">
                  <i className="far fa-circle nav-icon" />
                  <p>Referral</p>
                </NavLink>
              </li>
            </ul>
          </li>

        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>

   );
}
 
export default SideBar;