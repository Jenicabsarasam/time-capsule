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
          <h1 className='website-name'>Time Capsule</h1>
          <p className='website-line'>Treasure your memories in this Time Travel Vault.</p>
          <Col>
          <Button onClick={()=>knowMore()}>Explore more</Button>
        </Col>
        <Col>
          <Button onClick={()=>loginPage()}>Login</Button>
        </Col>
      </Row>
     
    </Container>
    </>
  )
}

export default MainHome
