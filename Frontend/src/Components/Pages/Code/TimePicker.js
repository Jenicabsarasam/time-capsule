import React, { useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import DateTimePicker from 'react-datetime-picker'
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import bg from '../Assets/Images/blueBackgroundHD.png';
import '../Styles/time.css';

const TimePicker = () => {
    const [value,setValue]=useState(new Date())
  return (
    
    <>
    <Container fluid>
      <img src={bg} className='img-fluid bg-img' alt='background'/>
    <Row>
      <Col className='name-section'>
        <h1 className='label'>Name for your capsule:</h1>
        <input type='text' placeholder='Time Capsule Name' className='text-box'></input>      
      </Col>
     </Row>
     <Row>
      <Col className='date-section'>
        <h1 className='label'>Chose Date and Time:</h1>
        <DateTimePicker onChange={setValue} value={value} className='date-box' />      
      </Col>
     </Row>
    </Container>
    </>
  )
}

export default TimePicker
