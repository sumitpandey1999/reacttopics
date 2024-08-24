import React, { useState } from 'react'

const CircleWithCurser = () => {
    const [position, setPosition] = useState({
        posX: "0",
        posY: "0"
    })


    
    const handleCircleWithMouse = (e) => {

        const timer = setTimeout(()=>{
            setPosition({
                posX: e.clientX,
                posY: e.clientY
            }
            )    
        },100)
 return ()=>{
    clearTimeout(timer)
 } 
    }

    return (
        <div style={{ height: '100vh', width: '100vw' }}
            className='container relative'
            onMouseMove={handleCircleWithMouse}
        >

            <div
                className='w-4 h-4 rounded-full border bg-red-600' style={{ left: position.posX, top: position.posY, position: 'absolute' }}
            >

            </div>
        </div>
    )
}

export default CircleWithCurser
