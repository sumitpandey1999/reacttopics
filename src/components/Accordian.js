import React from 'react'
import { useState } from 'react'

const Accordian = () => {

    const [toggleAccordian, setToggleAccordian] = useState({
        tooglePara1: false,
        tooglePara2: false,
        tooglePara3: false,
    })


  return (
    <div>
       <div>
                <div className="flex justify-center">
                    <span className="text-red-600 font-extrabold px-1 text-lg" onClick={() => {
                        setToggleAccordian({
                            ...toggleAccordian, tooglePara1: !toggleAccordian.tooglePara1, tooglePara2:false, tooglePara3:false
                        })
                    }}>{toggleAccordian.tooglePara1 ? "-" : "+"}</span>
                    <h3>Para1</h3>
                </div>
                {toggleAccordian.tooglePara1 && (<div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, iure.</p>
                </div>)}
            </div>


            <div>
                <div className="flex justify-center">
                    <span className="text-red-600 font-extrabold px-1 text-lg" onClick={() => {
                        setToggleAccordian({
                            ...toggleAccordian, tooglePara2: !toggleAccordian.tooglePara2, tooglePara1:false, tooglePara3:false
                        })
                    }}>{toggleAccordian.tooglePara2 ? "-" : "+"}</span>
                    <h3>Para2</h3>
                </div>
                {toggleAccordian.tooglePara2 && (<div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, iure.</p>
                </div>)}
            </div>



            <div>
                <div className="flex justify-center">
                    <span className="text-red-600 font-extrabold px-1 text-lg" onClick={() => {
                        setToggleAccordian({
                            ...toggleAccordian, tooglePara3: !toggleAccordian.tooglePara3, tooglePara2:false, tooglePara1:false
                        })
                    }}>{toggleAccordian.tooglePara3 ? "-" : "+"}</span>
                    <h3>Para3</h3>
                </div>
                {toggleAccordian.tooglePara3 && (<div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, iure.</p>
                </div>)}
            </div>

    </div>
  )
}

export default Accordian




