import React from 'react';
const SideBar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="#" className="brand-link">
        <img src="/backend/images/pokemon-logo.png" alt="Admin Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
        <span className="brand-text font-weight-light">Mypoke NFT</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="/backend/images/pokemon.png" className="img-circle elevation-2" alt="User Image" />
          </div>
          <div className="info">
            <a href="#" className="d-block">Admin</a>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item has-treeview  menu-open @endif">
              <a href="#" className="nav-link active @endif">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Dashboard
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="#" className="nav-link active">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item has-treeview ">
              <a href="#" className="nav-link active">
                <i className="nav-icon fas fa-layer-group" />
                <p>
                  NFTs
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="#" className="nav-link  active">
                    <i className="far fa-circle nav-icon" />
                    <p>NFT</p>
                  </a>
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