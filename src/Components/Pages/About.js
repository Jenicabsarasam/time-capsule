import React,{useState} from 'react';
import { useNavigate } from 'react-router';
import Butterfly from './Images/jar-blur-2.png'
import './about.css'
import { useSpring ,animated} from '@react-spring/web';
import { Button, Container, Row, Col } from 'react-bootstrap';
import mountain from './Images/fullMountain.jpg';
import sand from './Images/onlysand.png';
import butter from './Images/onlybutterfly.png';
import backgroundVideo from './Images/shipNight.mp4'
import sea from './Images/Sea.jpeg';


const About = () => {
  const [isToggle,setToggle]=useState(false);

  const headSize=useSpring(
    {
      fontSize: isToggle? '40px' : '30px', 
    }
  )
  const navigate=useNavigate()
  const goToSign=()=>{
    navigate("./SignIn");
  }


  return (
    <>
    <Container fluid className='no-padding section bg'>
      <Row>
        <Col md='auto'>
          <animated.h1 className='heading' style={headSize}>Capture your memories</animated.h1>
        </Col>
      </Row>
      <Row>
        <Col md='auto'>
            <animated.div  onMouseEnter={()=>setToggle(true)} onMouseLeave={()=>setToggle(false)}>
            <img src={Butterfly} style={{width:"70%"}} alt='jar-butterflies-flying'/> 
            </animated.div>
        </Col>
        <Col md='auto'>
            
            <h1>halllloooo</h1>
        </Col>
      </Row>
    </Container>
    <Container fluid className='no-padding section'>
      <Row>
        <Col>
          <video autoPlay loop muted id='bgVideo'>
            <source src={backgroundVideo} type='video/mp4'></source>
          </video>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Time Vault</h1>
        </Col>
        <Col>
          <h2>Echoing Memories</h2>
        </Col>
      </Row>
    </Container>
    
        
      
      
  
    </>
  );
}

export default About
