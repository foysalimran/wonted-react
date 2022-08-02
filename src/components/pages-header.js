import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/wonted-logo.png'

const PagesHeader = () => {
    return (
       
        <header className="header">
          <div className="container">
            <div className="row">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">
                  {/* <h1 className="m-0">WONTED</h1> */}
                  <img src={logo} alt="Wonted" />
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul id="onepage-nav" className="navbar-nav menu ms-lg-auto">
                    <li className="nav-item dropdown submenu">
                      <a
                        className="nav-link scroll dropdown-toggle"
                        href="#hero"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >Home
                        <span className="sub-menu-toggle">
                          <i className="icofont-rounded-down"></i> </span
                      ></a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link to="/v1" className="nav-link">Home One</Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/v2" className="nav-link">Home Two</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/v3" className="nav-link">Home Three</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/v4" className="nav-link">Home Four</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/v5" className="nav-link">Home Five</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/v6" className="nav-link">Home Six</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown submenu">
                      <a
                        className="nav-link scroll dropdown-toggle"
                        href="#events"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >Events
                        <span className="sub-menu-toggle">
                          <i className="icofont-rounded-down"></i> </span
                      ></a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                        <Link to="/all-event" className="nav-link">All Events</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/all-event" className="nav-link">Single Event</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown submenu">
                      <a
                        className="nav-link scroll dropdown-toggle"
                        href="#blog"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >Blog
                        <span className="sub-menu-toggle">
                          <i className="icofont-rounded-down"></i> </span
                      ></a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                        <Link to="/all-blog" className="nav-link">All Blogs</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/single-blog" className="nav-link">Single Blog</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/version-02" className="nav-link">Blog Right Sidebar</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/version-02" className="nav-link">Blog Left Sidebar</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span><span></span><span></span><span></span><span></span
                  ><span></span>
                </button>
              </nav>
            </div>
          </div>
        </header>
     
    );
};

export default PagesHeader;