import React, { useEffect } from 'react'
import { useState } from 'react'

const CircleOnClick = () => {

    const[position, setPosition] = useState({
        positionx:"0",
        positiony:"0" 
    })

    const circlePosition = (e)=>{
        setPosition({
            positionx: e.clientX,
            positiony: e.clientY
        })
    
  
    }

    useEffect(()=>{
        document.addEventListener("click", circlePosition)

        return()=>{
            document.removeEventListener('click', circlePosition)
        }

    },[])
   
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }} className=''>
      <h2>Circle on Click</h2>  
    <div style={{position:'absolute', left:position.positionx, top:position.positiony}} className='w-20 h-20 border border-red-600'></div> 
    </div>
  )
}

export default CircleOnClick



