import React from 'react'
import '../Styles/dashboard.css'
import {Container, Row, Col, Accordion, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router';

const Dashboard = () => {
    const navigate=useNavigate()
    const uploadPage=()=>{
    navigate('/Upload');
  }
  return (
    <>
    <Container fluid className='containerPic'>
        <Row>
            <Col><h1 className='welcome'>Welcome!</h1></Col>
        </Row>
        <Row>
            <Col className='intro-line'><quote >" Memories are whispers from yesterday to tomorrow.<br/> Store them, share them, and reconnect <br/> with who you were, who you are, and who you’ll become "</quote></Col>
        </Row>
        <Row className='select-row'>
            <Col md='auto'>
            <Accordion className='optionBox'>
                <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <h4>View Your Time Capsules</h4>                    
                </Accordion.Header>
                <Accordion.Body>
                    <p>You have not created any time capsule</p>
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>            
            </Col>
            <Col md='auto'>
            <Button variant='light' className='create-btn' onClick={()=>uploadPage()}>Create New Time Capsule</Button>          
            </Col>
        </Row>  
    </Container>
    </>
  )
}

export default Dashboard
