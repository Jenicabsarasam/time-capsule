import React,{useState} from 'react';
import { useNavigate } from 'react-router';
import Butterfly from './Images/jar-blur-2.png'
import './home.css'
import { useSpring ,animated} from '@react-spring/web';
import { Button } from 'react-bootstrap';
import mountain from './Images/fullMountain.jpg';
import sand from './Images/onlysand.png';
import butter from './Images/onlybutterfly.png';


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
    <div className='d-flex front'>
      <div className='front'>
        <img src={Butterfly} className='front-img' alt='butterflyimage'/>
      </div>
      <div className='front'>
        <animated.h1 className='heading' style={headSize}>Capture your memories</animated.h1> 
        <animated.div className='imgdiv' onMouseEnter={()=>setToggle(true)} onMouseLeave={()=>setToggle(false)} style={sizeDec}>
          <img src={mountain} className='bg' alt='mountain'/> 
          <div>
            <h1 className='text-block-head'>Some catchy title</h1>
            <h4 className='text-block-p'>sentence on time capsule</h4>
            <Button className='text-block-btn' onClick={()=> goToSign()}>SignIn</Button>
          </div>
        </animated.div>       
      </div>
    </div>
    <div className='d-flex black'>
        <div>
          <img src={sand} style={{height:'500px'}} alt='sand'/>
        </div>
        <div className='text-white black'>
          <h1>sckdjsclk</h1>
          <h3>loremyyy</h3>
          <p className='secondpgtext'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium amet quod accusantium dignissimos perspiciatis, dolores nam cumque eligendi architecto necessitatibus sint obcaecati libero minima repellendus iusto, officiis molestiae dicta laudantium?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, soluta tempore sint quas voluptate accusantium magnam laudantium, quidem corporis velit, fugit perferendis alias delectus atque quod quibusdam! Error, veritatis earum.</p>
        </div>
        <div>
          <img src={butter} style={{height:'500px'}} alt='butterfly'/>
        </div>
    </div>
    
    </>
  );
}

export default About
