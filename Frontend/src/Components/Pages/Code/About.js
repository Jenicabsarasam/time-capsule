import React,{useState} from 'react';
import '../Styles/about.css';
import { useNavigate } from 'react-router';
import { useSpring ,animated} from '@react-spring/web';
import { Button, Container, Row, Col } from 'react-bootstrap';
import sand from '../Assets/Images/onlysand.png';
import butter from '../Assets/Images/onlybutterfly.png';
import backgroundVideo from '../Assets/Videos/nightSky.mp4'
import crystal from '../Assets/Images/crystalBall.jpg';
import clockman from '../Assets/Images/clockMan.jpeg';
import time from '../Assets/Images/Jar.jpg';
import clock from '../Assets/Images/Vintage Clock _ Dark Aesthetic.jpeg';


const About = () => {
  const navigate=useNavigate()
  const loginPage=()=>{
    navigate('/SignIn');
  }

  const [isToggle,setToggle]=useState(false);

  const headSize=useSpring(
    {
      fontSize: isToggle? '43px' : '35px', 
    }
  )
  
  return (
    <>
    <Container fluid className='no-padding section'>
          <video autoPlay loop muted id='bgVideo'>
            <source src={backgroundVideo} type='video/mp4'></source>
          </video>        
      <Row>
        <Col md='auto'>
          <animated.h1 className='heading' style={headSize}>Capture your memories</animated.h1>
        </Col>
      </Row>
      <Row>
        <Col className='p-2'>
            <animated.div  onMouseEnter={()=>setToggle(true)} onMouseLeave={()=>setToggle(false)}>
            <img src={crystal} style={{width:"70%",margin:"10px"}} alt='ball'/> 
            </animated.div>
        </Col>
        <Col className='description-block'>
              <h1 className='what-head'>What's inside ?</h1>
              <p className='what-is'> Welcome to an amazing experience where you can create your own personalized Time Capsule! Capture and preserve your most cherished moments with snapshots, videos, text, and voice recordings. Give your Time Vault a unique name, choose a future date to open it, and seal it tight. The countdown begins, and soon, you'll receive a message from your past self ! </p> 
              
              <Button variant='dark' className='login-btn' onClick={()=>loginPage()}>Login</Button>
        </Col>
      </Row>
      <Row>
        <Col className='what-line'>
         <span>Time stands still while the countdown echoes. Your memories aren't just fleeting moments , they are treasures, each waiting for the day they'll shine brilliantly again ...    
         </span>
        </Col>
      </Row>
    </Container>
    <Container fluid className='secondpg'>
      <Row>
        <Col>
          <img src={sand} alt='sand-clock' style={{width:'90%'}}></img>
        </Col>
        <Col className='secondpg-text'>
          <h1>Echoes of future</h1>
          <p>What if every moment captured was a love letter to your future self? Write it boldly; the stories you plant today will resonate like echoes of tomorrow.
          </p>
          <span>Each countdown transforms your time capsule into a vessel, navigating an ocean of memories, while the tides of the present carry whispered secrets across the waves, reminding you that every moment is a treasure awaiting rediscovery. Above, galaxies beckon, ready to reveal the profound connections between who you were and who you will become—the ultimate journey through time. </span>        
        </Col>
        <Col>
          <img src={butter} alt='sand-clock' style={{width:'70%'}}></img>
        </Col>
      </Row>
    </Container>
    <Container fluid>
      <Row className='black'>
        <Col xs={12} md={4}>
        <div className='container'>
        <img src={clockman} alt="Avatar" className="image"/>
        <div className="overlay">
          <div className="text">Create an account</div>
        </div>
        </div>
        </Col>
        <Col xs={12} md={4}>
        <div className='container'>
        <img src={time} alt="Avatar" className="image"/>
        <div className="overlay">
          <div className="text">Upload photos, videos and text of precious moments</div>
        </div>
        </div>
        </Col>
        <Col xs={12} md={4}>
        <div className='container'>
        <img src={clock} alt="Avatar" className="image"/>
        <div className="overlay">
          <div className="text">Set a Date to open</div>
        </div>
        </div>
        </Col>
      </Row>
    </Container>
    <Container fluid className='footer p-4'>
      
    </Container>
    </>
  );
}

export default About
