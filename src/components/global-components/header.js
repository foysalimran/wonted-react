import { default as React, useState } from "react";
import logo from "../../assets/images/wonted-logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from 'react-scroll'


const Header = () => {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 60) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  // react scroll 
  

  return (
    <header className={fix ? 'header navbar_fixed' : 'header'}>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="index.html">
              {/* <!-- <h1 className="m-0">WONTED</h1> --> */}
              <img src={logo} alt="Wonted" />
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul id="onepage-nav" className="navbar-nav menu ms-lg-auto">
                <li className="nav-item dropdown submenu">
                <Link
                    activeClass="active"
                    className="hero nav-link scroll dropdown-toggle"
                    to="hero"
                    spy={true}
                    smooth={true}
                    duration={500}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Home
                  </Link>
                  {/* <a
                    className="nav-link active scroll dropdown-toggle"
                    href="#hero"
                    
                  >
                    Home
                    <span className="sub-menu-toggle">
                      <i className="icofont-rounded-down"></i>{" "}
                    </span>
                  </a> */}
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="index.html" className="nav-link">
                        Home One
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index-2.html" className="nav-link">
                        Home Two
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index-3.html" className="nav-link">
                        Home Three
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index-4.html" className="nav-link">
                        Home Four
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index-5.html" className="nav-link">
                        Home Five
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index-6.html" className="nav-link">
                        Home Six
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#benefits">
                    Benefits
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#chapters">
                    Chapters
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#pricing">
                    {" "}
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#author">
                    Author
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#achivements">
                    Achievements
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#reviews">
                    Reviews
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#contact">
                    Contact
                  </a>
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
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
