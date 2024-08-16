import {useState,React} from 'react';
import './contact.css';
import {Offcanvas,Tooltip,OverlayTrigger, Container} from 'react-bootstrap';
import top from './Images/purplebg.jpeg';
import bottom from './Images/purplebottom.jpeg';
import send from './Images/send.png';
import flying from './Images/Butterfly Freedom Sticker - Butterfly Freedom Pretty - Discover & Share GIFs.gif';
import { useSpring,animated } from '@react-spring/web';
import fb from './Images/fb.png';
import insta from './Images/insta.png';
import mail from './Images/mail.png';
import phone from './Images/phone.png';
import x from './Images/X.png';
import msg from './Images/messageicon.png'


const Contact = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isToggle,setToggle]=useState(false);
  const size=useSpring(
    {
      width: isToggle? '210px' : '190px',
      opacity: isToggle? '1' : '0.8',
    }
  )
  function msgCheck(){
    const msg=document.getElementById('text').value;
    if(msg===""){
      alert('Type something');
    }
    else{
      alert('We recieved your message.Will get back to you soon.Thankyou!')
      document.getElementById('text').value="";
    }
    
  }
  
  const renderTooltip=(props)=>(
    <Tooltip id="icon" {...props}>Send</Tooltip>
  );

  return (
    <Container>
    <div className='box'>
      <div className='d-flex'>
        <img src={top} alt="top" style={{width:'100%'}}></img>
      </div>
      <div className='d-flex bg-white justify-content-around'>
        <div>
          <h4 className='contact'><img src={phone}></img> 9123467854</h4>
          <h4 className='contact'><img src={insta}></img> time_travel</h4>
          <h4 className='contact'><img src={fb}></img> time capsule</h4>
          <h4 className='contact'><img src={mail}></img> timecapsule@gmail.com</h4>
          <h4 className='contact'><img src={x}></img> timecapsulzz</h4>
          <animated.input type='image' src={msg} alt="send a message" onClick={handleShow} onMouseEnter={()=>setToggle(true)} onMouseLeave={()=>setToggle(false)} style={size}/>   
         </div>
        <div>
          <img src={flying} alt="flying butterfly" style={{width:"220px"}}></img>
        </div>
      </div>
      <div className='d-flex'>
        <img src={bottom} style={{width:'100%'}}></img>
      </div>
    </div>
    <Offcanvas show={show} onHide={handleClose} placement='bottom'>
        <Offcanvas.Header className='offmessagehead' closeButton>
          <Offcanvas.Title>Send a message</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <input type='text' placeholder='How can we help you?' className='inputbox' id="text"/>
          <OverlayTrigger placement='right' delay={{show:250,hide:400}} overlay={renderTooltip}>
            <input type='image' src={send} id='icon' alt="send icon" className='sendicon' onClick={msgCheck}/>  
          </OverlayTrigger>  
        </Offcanvas.Body>
    </Offcanvas>
    </Container>
  )
}

export default Contact
