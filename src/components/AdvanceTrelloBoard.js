import React from 'react'
import { useState } from 'react'

const AdvanceTrelloBoard = () => {


    const [taskState, setTaskState] = useState(
        {
            toDo: [],
            inProgress: [],
            completed: []
        }
    )

    console.log(taskState.toDo)
    const [inputValue, setInputValue] = useState("")
    const [category, setcategory] = useState('')

    // console.log(category)
    const handleAddButton = (category) => {

        if (!taskState[category]) {
            console.log("Enter valid Category")
            return
        }

        setTaskState((preValue) => {
            return (
                {
                    ...preValue,
                    [category]: [...preValue[category], inputValue]
                }
            )
        })
        setInputValue("")
        setcategory("")

    }

    const handleEditButton = (index, stateCategory)=>{
   
    }


    return (
        <div className='mt-5'>
            <input
                className='border-1 border-green-700 px-1 mx-2'
                type="text"
                placeholder='Write your Task'
                onChange={(e) => { setInputValue(e.target.value) }}
                value={inputValue}
                id='input'
            />
            <select
                className='border border-green-700 mr-1'
                name="category"
                id="category"
                onChange={(e) => { setcategory(e.target.value) }}
                value={category}
            >
                <option value="select">Select</option>
                <option value="toDo">Todo</option>
                <option value="inProgress">In Progress</option>
                <option value="completed">Completed</option>
            </select>

            <button
                className='border border-green-700 px-1'
                onClick={() => handleAddButton(category)}
            >Add Task</button>

            <div className='flex mt-10'>
                <div className='w-1/3 border-2 border-black ml-2'>
                    <h2 className='font-bold'>To Do</h2>
                    <ul>
                        {
                            taskState.toDo.map((todo, index) => {
                                return (
                                   <div key={index} className='flex justify-center'>
                                     <li key={index}>{todo}</li>
                                    <button
                                    id='edit'
                                     className='bg-yellow-300 px-1 rounded-md'
                                     onClick={()=>handleEditButton(index,"toDo")}
                                     >Edit</button>
                                    <button className='bg-yellow-300 px-1 rounded-md'>Delete</button>
                                   </div>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className='w-1/3 border-2 border-black ml-2'>
                    <h2 className='font-bold'>In Progress</h2>
                    <ul>
                        {
                            taskState.inProgress.map((inProgress, index) => {
                                return (
                                   <div key={index} className='flex justify-center'>
                                     <li key={index}>{inProgress}</li>
                                    <button className='bg-yellow-300 px-1 rounded-md'>Edit</button>
                                        <button className='bg-yellow-300 px-1 rounded-md'>Delete</button>
                                   </div>
                                )
                            })
                        }
                    </ul>
                </div>


                <div className='w-1/3 border-2 border-black ml-2 mr-2'>
                    <h2 className='font-bold'>Cmpleted</h2>
                    <ul>
                        {
                            taskState.completed.map((completed, index) => {
                                return (
                                    <div key={index} className='flex justify-center'>
                                        <li>{completed}</li>
                                        <button className='bg-yellow-300 px-1 rounded-md'>Edit</button>
                                        <button className='bg-yellow-300 px-1 rounded-md'>Delete</button>
                                    </div>

                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdvanceTrelloBoard
