import React, { useState } from 'react'

const TrelloBoard = () => {

    const [toDo, setToDo] = useState([])
    const [task, settask] = useState("")
    const [progrssList, setProgrssList] = useState([])
    const [completeTask, setCompleteTask] = useState([])


    const handleMoveRight = (index) => {
        const clickedTask = toDo.filter((item) => item === toDo[index])
        setProgrssList((preValue) => [...preValue, clickedTask])
    }

    const handleComplete = (index) => {
        const complete = progrssList.filter((item) => {
            return (
                item === progrssList[index]
            )
        })
        setCompleteTask((preValue) => [...preValue, complete])
    }


    const handleProgress = (index)=>{
        const progress = completeTask.filter((item)=>{
          return(
            item===completeTask[index]
          )
        })

        setProgrssList((preValue) => [...preValue, progress])
    }

    const handleDelete = (index)=>{
       const deletetask = [...toDo]
       console.log(deletetask)
       deletetask.splice(index,1)
       setToDo(deletetask)
       
    }

    return (
        <div>
            <h1 className='font-bold'>TRELLOBOARD</h1>

            <input
                onChange={(e) => settask(e.target.value)}
                value={task}
                className='border border-gray-400 px-1'
                type="text" name="toDo" id="toDo" />

            <button
                className='bg-green-600 px-2 rounded-md ml-1'
                onClick={() => {
                    setToDo((prevToDo) => [...prevToDo, task])
                    settask("")
                }}
            >Add Task</button>

            <div className='flex justify-around mt-5 '>
                <div className='border-2 border-green-400 w-80'>
                    <h3 className='font-semibold'>Todo List</h3>

                    <ul>
                        {toDo.map((toDo, index) => {
                            return (

                                <li key={index}>{toDo}
                                    <span onClick={() => handleMoveRight(index)} className='text-sm bg-yellow-300 cursor-pointer'>
                                        Move Right</span> <span onClick={()=>handleDelete(index)}>Delete</span></li>
                            )
                        })}
                    </ul>

                </div>


                <div className='border-2 border-green-400 w-80'>
                    <h3 className='font-semibold'>In Progress</h3>
                    <ul>
                        {progrssList &&
                            progrssList.map((progrssItem, index) => {
                                return (
                                    <li key={index}>{progrssItem}
                                        <span onClick={() => handleComplete(index)} className='text-sm bg-yellow-300 cursor-pointer'>Complete</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='border-2 border-green-400 w-80'>
                    <h3 className='font-semibold'>Complete</h3>
                    <ul>
                        {completeTask &&
                            completeTask.map((completeTask, index) => {
                                return (
                                    <li key={index}>{completeTask}
                                    <span onClick={() => handleProgress(index)} className='text-sm bg-yellow-300 cursor-pointer'>InProgress</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default TrelloBoard
