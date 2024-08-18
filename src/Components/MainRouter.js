import React from 'react';
import About from './Pages/About';
import Faq from './Pages/Faq';
import Contact from './Pages/Contact';
import SignIn from './Pages/SignIn';
import Upload from './Pages/Upload';
import VideoUpload from './Pages/VideoUpload';
import NotFound from './Pages/NotFound';
import MainHome from './Pages/MainHome';
import {Routes,Route,Link } from 'react-router-dom';
import { Navbar,Container,Nav } from 'react-bootstrap';
import './Pages/Router.css'

const MainRouter = () => {
  return (
    <>
      <Navbar expand="lg" className="navbartop">
      <Container>
        <Navbar.Brand className='text-white' as={Link} to='/'>Time Capsule</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-white' as={Link} to='/About'>About</Nav.Link>
            <Nav.Link className='text-white' as={Link} to='/'>Home</Nav.Link>
            <Nav.Link className='text-white' as={Link} to='/Faq'>Faq</Nav.Link>
            <Nav.Link className='text-white' as={Link} to='/Contact'>Contact</Nav.Link>
            <Nav.Link className='text-white' as={Link} to='/SignIn'>SignIn</Nav.Link>
            <Nav.Link className='text-white' as={Link} to='/Upload'>Upload</Nav.Link>
            <Nav.Link className='text-white' as={Link} to='/VideoUpload'>VideoUpload</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  
      <div>
      <Routes>
        <Route path="/" element={ <MainHome/> } />
        <Route path="/About" element={ <About/> } />
        <Route path="/Faq" element={ <Faq/> } />
        <Route path="/Contact" element={ <Contact/> } />
        <Route path="/SignIn" element={ <SignIn/> } />
        <Route path="/Upload" element={ <Upload/> } />
        <Route path="/VideoUpload" element={ <VideoUpload/> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
    </div>
    </>
  )
}

export default MainRouter
