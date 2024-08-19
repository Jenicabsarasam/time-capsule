import React, { useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import DateTimePicker from 'react-datetime-picker'
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const TimePicker = () => {
    const [value,setValue]=useState(new Date())
  return (
    
    <>
    <Container>
     <Row>
      <Col className='p-4 m-3'>
        <DateTimePicker onChange={setValue} value={value} />      
      </Col>
     </Row>
    </Container>
    </>
  )
}

export default TimePicker
