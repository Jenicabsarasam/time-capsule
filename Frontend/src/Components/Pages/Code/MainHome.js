import React from 'react'
import '../Styles/MainHome.css'
import backgroundVideo from '../Assets/Videos/shipNight.mp4'
import { Container,Row ,Col,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router'


const MainHome = () => {
  const navigate=useNavigate()
  const knowMore=()=>{
    navigate('./About');
  }
  const loginPage=()=>{
    navigate('./SignIn');
  }

  return (
    <>
    <Container fluid className='no-padding'>
      <video autoPlay loop muted id='bgVideo'>
        <source src={backgroundVideo} type='video/mp4'></source>
      </video>
      <Row className='content-center'>
          <h1 className='website-name'>Time Treasure</h1>
          <p className='website-line'>Treasure your memories in this Time Travel Vault.</p>      
      </Row>  
      <Row className='btn-row'>
        <Col>
          <button onClick={()=>knowMore()} className='button'>Explore More</button>
        </Col>
        <Col>
          <button onClick={()=>loginPage()} className='button'>Login Now</button>
        </Col>  
      </Row>   
    </Container>
    </>
  )
}

export default MainHome
