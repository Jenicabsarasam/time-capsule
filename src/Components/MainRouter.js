import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import SignIn from './Pages/SignIn';
import ImageUpload from './Pages/ImageUpload';
import NotFound from './Pages/NotFound';
import {Routes,Route,Link } from 'react-router-dom';
import { Navbar,Container,Nav } from 'react-bootstrap';
import './Pages/home.css'

const MainRouter = () => {
  return (
    <>
       <Navbar expand="lg" className="navbartop">
      <Container>
        <Navbar.Brand className='text-white' as={Link} to='/'>Time Capsule</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-white' as={Link} to='/'>Home</Nav.Link>
            <Nav.Link className='text-white' as={Link} to='/About'>About</Nav.Link>
            <Nav.Link className='text-white' as={Link} to='/Contact'>Contact</Nav.Link>
            <Nav.Link className='text-white' as={Link} to='/SignIn'>SignIn</Nav.Link>
            <Nav.Link className='text-white' as={Link} to='/ImageUpload'>ImageUpload</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  
      <div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="About" element={ <About/> } />
        <Route path="Contact" element={ <Contact/> } />
        <Route path="SignIn" element={ <SignIn/> } />
        <Route path="ImageUpload" element={ <ImageUpload/> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
    </div>
    </>
  )
}

export default MainRouter
