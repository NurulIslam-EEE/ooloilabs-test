import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar bg="#FFFFFF" expand="lg" className='navigation'>
    <Container >
      <Navbar.Brand className='m-auto' href="/"><img src='/logo.webp' alt=''/></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="ms-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
         <button className='nav-btn'>Book a demo</button>
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation