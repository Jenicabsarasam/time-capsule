import React,{useState} from 'react';
import Butterfly from './Images/jar-blur-2.png'
import './home.css'
import { useSpring ,animated} from '@react-spring/web';
import { Button } from 'react-bootstrap';
import mountain from './Images/fullMountain.jpg';
import sand from './Images/onlysand.png';
import butter from './Images/onlybutterfly.png';


const Home = () => {
  const [isToggle,setToggle]=useState(false);
  const sizeDec=useSpring(
    {
      width: isToggle? '250px' : '300px',
    }
  )
  const headSize=useSpring(
    {
      fontSize: isToggle? '40px' : '30px', 
    }
  )
  


  return (
    <>
    <div className='d-flex front'>
      <div className='front'>
        <animated.img src={Butterfly} className='front-img' onMouseEnter={()=>setToggle(true)} onMouseLeave={()=>setToggle(false)} style={sizeDec}/>
      </div>
      <div className='front'>
        <animated.h1 className='heading' style={headSize}>Capture your memories</animated.h1> 
        <div className='imgdiv'>
          <img src={mountain} className='bg'/> 
          <div>
            <h1 className='text-block-head'>Some catchy title</h1>
            <h4 className='text-block-p'>sentence on time capsule</h4>
            <Button className='text-block-btn'>Explore</Button>
          </div>
        </div>       
      </div>
    </div>
    <div className='d-flex black'>
        <div>
          <img src={sand} style={{height:'500px'}}/>
        </div>
        <div className='text-white black'>
          <h1>sckdjsclk</h1>
          <h3>loremyyy</h3>
          <p className='secondpgtext'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium amet quod accusantium dignissimos perspiciatis, dolores nam cumque eligendi architecto necessitatibus sint obcaecati libero minima repellendus iusto, officiis molestiae dicta laudantium?</p>
        </div>
        <div>
          <img src={butter} style={{height:'500px'}}/>
        </div>
    </div>
    </>
  );
}

export default Home
