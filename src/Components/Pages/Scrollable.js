import React from 'react'
import { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import sky from './Images/HD wallpaper_ nebula digital wallpaper, abstract, digital art, space, stars.jpeg'
import shore from './Images/Sea.jpeg'
import fly from './Images/6pkB.gif'

const Scrollable = () => {
  const ref=useRef();
  return (
    <div>
      <Parallax pages={2} ref={ref}>
        
        <ParallaxLayer
         speed={1}
         offset={0}
         style={{
          backgroundImage:`url(${shore})`,
          backgroundSize: 'cover',
         }}
         /> 
         <ParallaxLayer
          offset={3}
          speed={2}
          onClick={()=>ref.current.scrollTo(0)}
         >
         <h1>SEcond text</h1>
         </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Scrollable
