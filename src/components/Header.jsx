import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="primary" data-bs-theme="dark" >
    <Container>
      <Navbar.Brand>
     <Link to={'/'} style={{textDecoration:'none',color:'white',fontSize:'30px',paddingLeft:'10px'}}><i class="fa-solid fa-video fa-beat text-warning me-4"></i>{' '}Video Player</Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header