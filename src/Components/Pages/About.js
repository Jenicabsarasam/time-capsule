import React,{useState} from 'react';
import { useNavigate } from 'react-router';

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
    <Container fluid className='no-padding'>
      <Row>
        <Col>
          <video autoPlay loop muted id='bgVideo'>
            <source src={backgroundVideo} type='video/mp4'></source>
          </video>
        </Col>
      </Row>
      <Row>
        
      </Row>
        

      
  </Container> 
    </>
  );
}

export default About
