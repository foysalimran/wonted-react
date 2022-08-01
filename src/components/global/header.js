import { default as React, useState } from "react";
import logo from "../../assets/images/wonted-logo.png";
import { Link } from "react-scroll";
import data from "../../data/header.json"

const Header = () => {
  const {header } = data;
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
            <a className="navbar-brand" href='/'>
              {/* <!-- <h1 className="m-0">WONTED</h1> --> */}
              <img src={header.logo} alt="Wonted" />
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul id="onepage-nav" className="navbar-nav menu ms-lg-auto">
                {header.menu?.map((data, i) => (
                  <li className="nav-item dropdown submenu" key={i}>
                  <Link
                    activeClass="active"
                    className="benefits nav-link"
                    to={`${data.link}`}
                    spy={true}
                    smooth={true}
                    duration={500}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    offset={-60}
                  >
                    {data.title}
                  </Link>
                  {console.log(data.isDropdown)}
                  {data?.isDropdown === true ? (
                    <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="/"className="nav-link">
                        Home One
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/v2" className="nav-link">
                        Home Two
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="v3" className="nav-link">
                        Home Three
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="v4" className="nav-link">
                        Home Four
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="v5" className="nav-link">
                        Home Five
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="v6" className="nav-link">
                        Home Six
                      </a>
                    </li>
                  </ul>
                  ) : (
                    ""
                  )}
                </li>
                ))}
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
