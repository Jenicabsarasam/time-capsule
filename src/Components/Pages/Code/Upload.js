import React from 'react'
import ImageUpload from '../Code/ImageUpload';
import VideoUpload from '../Code/VideoUpload';
import TextUpload from '../Code/TextUpload';
import AudioUpload from '../Code/AudioUpload';
import '../Styles/Upload.css';
import pic from '../Assets/Images/image.png';
import video from '../Assets/Images/video-chat.png';
import audio from '../Assets/Images/sound.png';
import text from '../Assets/Images/note.png';
import { Container,Row,Col,Accordion,Button} from 'react-bootstrap';


const Upload = () => {
  return (
    <>
    <Container>
      <Row>
        <h1 className='text-center'>Welcome !</h1>
        <p>Are you ready to capture the moments...</p>
      </Row>
      <Row>
        <Col>
            <Accordion className='optionBox'>
                <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <h4>Upload Image</h4>
                    <img src={pic} style={{width:'50px',marginRight:'20px'}} alt='pic icon'></img>
                </Accordion.Header>
                <Accordion.Body>
                    <ImageUpload/>
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Col>
        <Col>
            <Accordion className='optionBox'>
                <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <h4>Upload Video</h4>
                    <img src={video} style={{width:'50px',marginRight:'20px'}} alt='video icon'></img>
                </Accordion.Header>
                <Accordion.Body>
                    <VideoUpload/>
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Col>
     </Row>
     <Row>
        <Col>
            <Accordion className='optionBox'>
                <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <h4>Upload Audio</h4>
                    <img src={audio} style={{width:'50px',marginRight:'20px'}} alt='audio icon'></img>
                </Accordion.Header>
                <Accordion.Body>
                    <AudioUpload/>
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Col>
        <Col>
            <Accordion className='optionBox'>
                <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <h4>Add a note</h4>
                    <img src={text} style={{width:'50px',marginRight:'20px'}} alt='text icon'></img>
                </Accordion.Header>
                <Accordion.Body>
                    <TextUpload/>
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Col>    
     </Row>
     <Row>
        <Button variant='outline-success' className='m-3 p-3'>Submit All</Button>
     </Row>
    
    </Container>
    </>
  )
}

export default Upload

