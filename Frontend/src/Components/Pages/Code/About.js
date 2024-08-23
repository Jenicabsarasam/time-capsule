import React,{useState} from 'react';
import '../Styles/about.css';
import { useNavigate } from 'react-router';
import Butterfly from '../Assets/Images/jar-blur-2.png';
import { useSpring ,animated} from '@react-spring/web';
import { Button, Container, Row, Col } from 'react-bootstrap';
import sand from '../Assets/Images/onlysand.png';
import butter from '../Assets/Images/onlybutterfly.png';
import backgroundVideo from '../Assets/Videos/nightSky.mp4'
import crystal from '../Assets/Images/crystalBall.jpg';
import sea from '../Assets/Images/Sea.jpeg';


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
        <Col md='auto'>
            <animated.div  onMouseEnter={()=>setToggle(true)} onMouseLeave={()=>setToggle(false)}>
            <img src={crystal} style={{width:"70%",margin:"10px"}} alt='ball'/> 
            </animated.div>
        </Col>
        <Col className='description-block'>
  
              <h1>Time Vault</h1>
              <p>Each countdown transforms your time capsule into a vessel, navigating an ocean of memories, while the tides of the present carry whispered secrets across the waves, reminding you that every moment is a treasure awaiting rediscovery. Above, galaxies beckon, ready to reveal the profound connections between who you were and who you will become—the ultimate journey through time.              
              </p> 
              <Button onClick={()=>loginPage()}>Login</Button>
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
          <p>What if every moment captured was a love letter to your future self? Write it boldly; the stories you plant today will resonate like echoes in the tomorrow.
          </p>
          
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
        <img src={sea} alt="Avatar" className="image"/>
        <div className="overlay">
          <div className="text">Hello World</div>
        </div>
        </div>
        </Col>
        <Col xs={12} md={4}>
        <div className='container'>
        <img src={sea} alt="Avatar" className="image"/>
        <div className="overlay">
          <div className="text">Hello World</div>
        </div>
        </div>
        </Col>
        <Col xs={12} md={4}>
        <div className='container'>
        <img src={Butterfly} alt="Avatar" className="image"/>
        <div className="overlay">
          <div className="text">Hello World</div>
        </div>
        </div>
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
