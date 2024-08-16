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


const About = () => {
  const [isToggle,setToggle]=useState(false);
  const sizeDec=useSpring(
    {
      width: isToggle? '500px' : '550px',
    }
  )
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
    <Container fluid className='no-padding section'>
      <Row>
      <Col>
        <img src={Butterfly} className='front-img' alt='butterflyimage'/>
      </Col>
      <Col className='front'>
        <animated.h1 className='heading' style={headSize}>Capture your memories</animated.h1> 
        <animated.div className='imgdiv' onMouseEnter={()=>setToggle(true)} onMouseLeave={()=>setToggle(false)} style={sizeDec}>
          <img src={mountain} className='bg' alt='mountain'/> 
          <div>
            <h1 className='text-block-head'>Some catchy title</h1>
            <h4 className='text-block-p'>sentence on time capsule</h4>
            <Button className='text-block-btn' onClick={()=> goToSign()}>SignIn</Button>
          </div>
        </animated.div>       
      </Col>
      </Row>
    </Container>
        
      
      
  
    </>
  );
}

export default About
