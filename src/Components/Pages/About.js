import React,{useState} from 'react';
import { useNavigate } from 'react-router';
import Butterfly from './Images/jar-blur-2.png'
import './about.css'
import { useSpring ,animated} from '@react-spring/web';
import { Button, Container, Row, Col } from 'react-bootstrap';
import sand from './Images/onlysand.png';
import butter from './Images/onlybutterfly.png';
import backgroundVideo from './Images/shipNight.mp4'
import crystal from './Images/crystalBall.jpg';
import sea from './Images/Sea.jpeg';


const About = () => {
  const [isToggle,setToggle]=useState(false);

  const headSize=useSpring(
    {
      fontSize: isToggle? '43px' : '35px', 
    }
  )
  const navigate=useNavigate()
  const goToSign=()=>{
    navigate("./SignIn");
  }


  return (
    <>
    <Container fluid className='no-padding section'>
        <Row><Col>
          <video autoPlay loop muted id='bgVideo'>
            <source src={backgroundVideo} type='video/mp4'></source>
          </video>
        </Col></Row>
        
      <Row>
        <Col md='auto'>
          <animated.h1 className='heading' style={headSize}>Capture your memories</animated.h1>
        </Col>
      </Row>
      <Row>
        <Col md='auto'>
            <animated.div  onMouseEnter={()=>setToggle(true)} onMouseLeave={()=>setToggle(false)}>
            <img src={crystal} style={{width:"70%",margin:"10px"}} alt='ball'/> 
            </animated.div>
        </Col>
        <Col className='description-block'>
  
              <h1>Time Vault</h1>
              <p>Time capsules are fun to make, and even more, fun to open years down the line.
                 A time capsule can be any container that holds objects meant for people to open in the future,
                 whether that be in 5, 10, or even 100 years. A good time capsule will hold its contents safely, preserving them for a future version of yourself, your grandchildren, or even a stranger. Soon you will have the skills to create a time capsule that will thrill and fascinate someone in the future.
                 Time capsules are fun to make, and even more, fun to open years down the line.                
              </p> 
          
        </Col>
      </Row>
    </Container>
    <Container fluid className='section secondpg'>
      <Row>
        <Col>
          <img src={sand} alt='sand-clock' style={{width:'90%'}}></img>
        </Col>
        <Col className='secondpg-text'>
          <h1>Echoes of future</h1>
          <p>ime capsules are fun to make, and even more, fun to open years down the line.
                 A time capsule can be any container that holds objects meant for people to open in the future,
                 whether that be in 5, 10, or even 100 years. A good time capsule will hold its contents safely, preserving them for a future version of yourself, your grandchildren, or even a stranger. Soon you will have the skills to create a time capsule that will thrill and fascinate someone in the future.
                 Time capsules are fu
          </p>
        </Col>
        <Col>
          <img src={butter} alt='sand-clock' style={{width:'70%'}}></img>
        </Col>
      </Row>
    </Container>
    <Container fluid className='footer'>
      <Row>
        <Col>
          <p>Footer</p>
        </Col>
        <Col>
          <p>Footer</p>
        </Col>
        <Col>
          <p>Footer</p>
        </Col>
      </Row>
    </Container>
    
        
      
      
  
    </>
  );
}

export default About
