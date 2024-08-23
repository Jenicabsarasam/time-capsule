import React from 'react';
import About from './Code/About';
import Faq from './Code/Faq';
import Contact from './Code/Contact';
import SignIn from './Code/SignIn';
import Upload from './Code/Upload';
import NotFound from './Code/NotFound';
import MainHome from './Code/MainHome';
import TimePicker from './Code/TimePicker';
import {Routes,Route,Link } from 'react-router-dom';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { ImHome3 } from "react-icons/im";
import './Styles/Router.css'

const MainRouter = () => {
  return (
    <>
      <Navbar expand="lg" className="navbartop">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='home-icon' as={Link} to='/'><ImHome3 /> </Nav.Link>
            <Nav.Link className='text-white mx-2' as={Link} to='/About'>About</Nav.Link>
            <Nav.Link className='text-white mx-2' as={Link} to='/Faq'>Faq</Nav.Link>
            <Nav.Link className='text-white mx-2' as={Link} to='/Contact'>Contact</Nav.Link>
            <Nav.Link className='text-white mx-2' as={Link} to='/SignIn'>SignIn</Nav.Link> 
            <Nav.Link className='text-white mx-2' as={Link} to='/Upload'>Upload</Nav.Link>
            <Nav.Link className='text-white mx-2' as={Link} to='/TimePicker'>Time Picker</Nav.Link>                       
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
        <Route path="/TimePicker" element={ <TimePicker/> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
    </div>
    </>
  )
}

export default MainRouter
