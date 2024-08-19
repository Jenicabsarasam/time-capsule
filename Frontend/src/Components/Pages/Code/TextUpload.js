import React from 'react'
import '../Styles/Upload.css';
import { Container,Row,Col,Button} from 'react-bootstrap';

const TextUpload = () => {
  const validate=()=>{
    const note=document.getElementById('note').value;
    if(note.trim()===""){
      alert('Enter text content!');
    }
    else{
      alert("Text uploaded");
      clear()
    }
  }
  const clear=()=>{
    document.getElementById('note').value=""; 
  }
  return (
    <>
    <Container>
      <Row>
        <Col>
          <input type='text' placeholder='Type something' id='note'/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant='outline-success' className='m-3 p-2' onClick={validate}>Upload</Button>
        </Col>
        <Col>
          <Button variant='outline-danger' className='m-3 p-2' onClick={clear}>Cancel</Button>
        </Col>
      </Row>

    </Container>
    </>
  )
}

export default TextUpload
