import { default as React, useState } from "react";
import logo from "../../assets/images/wonted-logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaChevronDown } from "react-icons/fa"

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

  return (
    // <!-- ========== Header start ========== -->
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#hero">
            <NavDropdown title="Home" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Home One</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Home Two</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Home Three</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Home Fore</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Home Five</NavDropdown.Item>
            </NavDropdown>
            <FaChevronDown /></Nav.Link>
            <Nav.Link href="#benefits">benefits</Nav.Link>
            <Nav.Link href="#test1">test1</Nav.Link>
            <Nav.Link href="#test2">test2</Nav.Link>
            <Nav.Link href="#test3">test3</Nav.Link>
            <Nav.Link href="#test4">test4</Nav.Link>
            <NavDropdown className="nav-link" title="Home" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Home One</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Home Two</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Home Three</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Home Fore</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Home Five</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <!-- ========== Header end ========== -->
  );
};

export default Header;
