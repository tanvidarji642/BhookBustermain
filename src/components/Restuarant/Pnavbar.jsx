import React from 'react'
import '../../assets/css/adminlte.min.css';
// import '../../assets/css/RNavSidebar.css';

const Rnav = () => {
  return (
    <nav className="app-header navbar navbar-expand bg-body">
      <div className="container-fluid d-flex justify-content-between">
        <h1>Restaurant</h1>

        {/* Left side links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-lte-toggle="sidebar" href="#">
              <i className="bi bi-list" />
            </a>
          </li>
          <li className="nav-item d-none d-md-block">
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className="nav-item d-none d-md-block">
            <a href="#" className="nav-link">Contact</a>
          </li>
        </ul>

        {/* Right side elements */}
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" data-widget="navbar-search" href="#">
              <i className="bi bi-search" />
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" data-bs-toggle="dropdown" href="#">
              <i className="bi bi-chat-text" />
              <span className="navbar-badge badge text-bg-danger">3</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
              <a href="#" className="dropdown-item">See All Messages</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" data-bs-toggle="dropdown" href="#">
              <i className="bi bi-bell-fill" />
              <span className="navbar-badge badge text-bg-warning">15</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
              <a href="#" className="dropdown-item">See All Notifications</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" data-lte-toggle="fullscreen">
              <i className="bi bi-arrows-fullscreen" />
            </a>
          </li>
          <li className="nav-item dropdown user-menu">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              <img src="../../dist/assets/img/user2-160x160.jpg" className="user-image rounded-circle shadow" alt="User Image" />
              <span className="d-none d-md-inline">Alexander Pierce</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
              <li className="user-footer">
                <a href="#" className="btn btn-default btn-flat">Profile</a>
                <a href="#" className="btn btn-default btn-flat float-end">Sign out</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>


  )
}

export default Rnav