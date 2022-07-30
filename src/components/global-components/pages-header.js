import React from 'react';
import logo from '../../assets/images/wonted-logo.png'

const PagesHeader = () => {
    return (
       
        <header className="header">
          <div className="container">
            <div className="row">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.html">
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
                          <a href="index.html" className="nav-link">Home One</a>
                        </li>
                        <li className="nav-item">
                          <a href="index-2.html" className="nav-link">Home Two</a>
                        </li>
                        <li className="nav-item">
                          <a href="index-3.html" className="nav-link">Home Three</a>
                        </li>
                        <li className="nav-item">
                          <a href="index-4.html" className="nav-link">Home Four</a>
                        </li>
                        <li className="nav-item">
                          <a href="index-5.html" className="nav-link">Home Five</a>
                        </li>
                        <li className="nav-item">
                          <a href="index-6.html" className="nav-link">Home Six</a>
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
                          <a href="all-events.html" className="nav-link">All Events</a>
                        </li>
                        <li className="nav-item">
                          <a href="single-event.html" className="nav-link"
                            >Single Event</a
                          >
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
                          <a href="all-blogs.html" className="nav-link">All Blog</a>
                        </li>
                        <li className="nav-item">
                          <a href="single-blog.html" className="nav-link"
                            >Single Blog</a
                          >
                        </li>
                        <li className="nav-item">
                          <a href="blog-right-sidebar.html" className="nav-link"
                            >Blog right sidebar</a
                          >
                        </li>
                        <li className="nav-item">
                          <a href="blog-left-sidebar.html" className="nav-link"
                            >Blog left sidebar</a
                          >
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