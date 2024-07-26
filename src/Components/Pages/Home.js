import React,{useState} from 'react';
import Butterfly from './Images/jar-blur-2.png'
import './home.css'
import { useSpring ,animated} from '@react-spring/web';


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

    <div className='front'>
      <animated.img src={Butterfly} className='front-img' onMouseEnter={()=>setToggle(true)} onMouseLeave={()=>setToggle(false)} style={sizeDec}/>
      <animated.h1 className='heading' style={headSize}>Capture your memories</animated.h1>
    </div>
   
    </>
  );
}

export default Home
