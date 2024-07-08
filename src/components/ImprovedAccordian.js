import { useState } from "react"

const ImprovedAccordian= () => {

    const [toggleAccordian, setToggleAccordian] = useState({
        tooglePara1: false,
        tooglePara2: false,
        tooglePara3: false,
    })

const handleAccordianToggle = (para)=>{
    setToggleAccordian((prevValue)=>({
        
        tooglePara1: para ==="para1"? !prevValue.tooglePara1:false,
        tooglePara2: para ==="para2"? !prevValue.tooglePara1:false,
        tooglePara3: para ==="para3"? !prevValue.tooglePara1:false,
        
    }))
}

    return (
        <div className="flex-col">
            <div>
                <div className="flex justify-center">
                    <span className="text-red-600 font-extrabold px-1 text-lg" onClick={()=>handleAccordianToggle("para1")}>{toggleAccordian.tooglePara1 ? "-" : "+"}</span>
                    <h3>Para1</h3>
                </div>
                {toggleAccordian.tooglePara1 && (<div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, iure.</p>
                </div>)}
            </div>


            <div>
                <div className="flex justify-center">
                    <span className="text-red-600 font-extrabold px-1 text-lg" onClick={()=>handleAccordianToggle("para2")}>{toggleAccordian.tooglePara2 ? "-" : "+"}</span>
                    <h3>Para2</h3>
                </div>
                {toggleAccordian.tooglePara2 && (<div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, iure.</p>
                </div>)}
            </div>



            <div>
                <div className="flex justify-center">
                    <span className="text-red-600 font-extrabold px-1 text-lg" onClick={()=>handleAccordianToggle("para3")}>{toggleAccordian.tooglePara3 ? "-" : "+"}</span>
                    <h3>Para3</h3>
                </div>
                {toggleAccordian.tooglePara3 && (<div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, iure.</p>
                </div>)}
            </div>

        </div>
    )
}
export default ImprovedAccordian