import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Binary-Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#pricing">Courses</Nav.Link>
           
            <Nav.Link href="/blog">Blog</Nav.Link>
           
            <Nav.Link href="#pricing">Login</Nav.Link>
           
            <Nav.Link href="#pricing">Register</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="">
  <label className="label cursor-pointer">
    <span className="label-text">Remember me</span> 
    <input type="checkbox" className="toggle" checked />
  </label>
</div>
      </Container>
    </Navbar>
    );
};

export default Header;