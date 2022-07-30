import { default as React, useState } from "react";
import logo from "../../assets/images/wonted-logo.png";
import { Link } from "react-scroll";

const Header = () => {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  return (
    <header className={fix ? "header navbar_fixed" : "header"}>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" href="/">
              {/* <!-- <h1 className="m-0">WONTED</h1> --> */}
              <img src={logo} alt="Wonted" />
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul id="onepage-nav" className="navbar-nav menu ms-lg-auto">
                <li className="nav-item dropdown submenu">
                  <Link
                    activeClass="active"
                    className="hero nav-link dropdown-toggle"
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
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="index.html" className="nav-link">
                        Home One
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="index-2.html" className="nav-link">
                        Home Two
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="index-3.html" className="nav-link">
                        Home Three
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="index-4.html" className="nav-link">
                        Home Four
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="index-5.html" className="nav-link">
                        Home Five
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="index-6.html" className="nav-link">
                        Home Six
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    className="benefits nav-link"
                    to="benefits"
                    spy={true}
                    smooth={true}
                    duration={500}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Benefits
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active"
                    className="chapters nav-link"
                    to="chapters"
                    spy={true}
                    smooth={true}
                    duration={500}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Chapters
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active"
                    className="pricing nav-link"
                    to="pricing"
                    spy={true}
                    smooth={true}
                    duration={500}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active"
                    className="author nav-link"
                    to="author"
                    spy={true}
                    smooth={true}
                    duration={500}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Author
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active"
                    className="achivements nav-link"
                    to="achivements"
                    spy={true}
                    smooth={true}
                    duration={500}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Achievements
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active"
                    className="reviews nav-link"
                    to="reviews"
                    spy={true}
                    smooth={true}
                    duration={500}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Reviews
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active"
                    className="contact nav-link"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Contact
                  </Link>
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
