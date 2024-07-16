import React, { useState } from 'react'

const DragAndDrop = () => {

    const todo = "todo"
    const doing = "doing"
    const completed = "completed"

    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState([])
    const [dragTask, setDragTask] = useState(null)
    const [updateItem, setUpdateItem] = useState(null)


    const handleAdd = () => {
        if (updateItem) {
            const obj = {
                title: task,
                id: updateItem.id,
                status: updateItem.status
            }
            let copyTask = [...taskList];
            copyTask = copyTask.filter((item)=>{
                return(
                    item.id !== updateItem.id
                )
            })
            setTaskList((prevValue)=>[...copyTask, obj])
            setUpdateItem(null)
        }else{
            const obj= {
                title:task,
                id: Date.now(),
                status:todo
            }
         setTaskList((prevValue)=>[...prevValue, obj])
        }
    }

    const handleDrag = (item) => {
        setDragTask(item)
        console.log(dragTask)
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDragAndDrop = (status) => {
        let copyTask = [...taskList]
        copyTask = copyTask.map((itemTask) => {

            if (itemTask.id === dragTask.id) {
                itemTask.status = status
            }
            return itemTask
        })
        setTaskList(copyTask)
        setDragTask(null)
    }

    const handleOndrop = (e) => {
        const status = e.target.getAttribute("data-status")
        console.log(status)

        if (status === todo) {
            handleDragAndDrop(todo)
        }
        else if (status === doing) {
            handleDragAndDrop(doing)
        }
        else if (status === completed) {
            handleDragAndDrop(completed)
        }

    }

    const handleDelete = (id) => {
        let copyTask = [...taskList];
        copyTask = copyTask.filter((item) => {
            return (
                item.id !== id
            )
        })
        setTaskList(copyTask)
    }

    const handleEdit = (task) => {
        setUpdateItem(task)
        setTask(task.title)
    }

    return (
        <div>
            <h1>Drag And Drop</h1>
            <input type="text"
                placeholder='Write your content'
                onChange={(e) => { setTask(e.target.value) }}
                value={task}
            />
            <button
                className='bg-green-700 p-1'
                onClick={handleAdd}
            >Add Task</button>


            <div className='flex justify-between'>

                <div className='w-1/3 border border-black mr-2'
                    data-status={todo}
                    onDragOver={handleDragOver}
                    onDrop={handleOndrop}
                >
                    <h2 className='font-bold'>ToDo</h2>
                    {taskList.map((item) => {
                        return (
                            item.status === todo && <div
                                key={item.id}
                                draggable
                                onDrag={() => { handleDrag(item) }}
                            >
                                {item.title}
                                <span
                                    onClick={() => handleEdit(item)}
                                    className='ml-2 bg-red-600'>Edit</span>
                                <span
                                    onClick={() => handleDelete(item.id)}
                                    className='ml-2 bg-red-600'>Delete</span>
                            </div>
                        )
                    })}
                </div>

                <div
                    className='w-1/3 border border-black mr-2'
                    data-status={doing}
                    onDragOver={handleDragOver}
                    onDrop={handleOndrop}
                >
                    <h2 className='font-bold'>Doing</h2>
                    {taskList.map((item) => {
                        return (
                            item.status === doing && <div key={item.id}
                                draggable
                                onDrag={() => { handleDrag(item) }}
                            >
                                {item.title}
                                <span
                                    onClick={() => handleEdit(item)}
                                    className='ml-2 bg-red-600'>Edit</span>
                                <span
                                    onClick={() => handleDelete(item.id)}
                                    className='ml-2 bg-red-600'>Delete</span>
                            </div>
                        )
                    })}
                </div>


                <div
                    className='w-1/3 border border-black'
                    data-status={completed}
                    onDragOver={handleDragOver}
                    onDrop={handleOndrop}
                >
                    <h2 className='font-bold'>Completed</h2>
                    {taskList.map((item) => {
                        return (
                            item.status === completed && <div key={item.id}
                                draggable
                                onDrag={() => { handleDrag(item) }}
                            >
                                {item.title}
                                <span
                                    onClick={() => handleEdit(item)}
                                    className='ml-2 bg-red-600'>Edit</span>
                                <span
                                    onClick={() => handleDelete(item.id)}
                                    className='ml-2 bg-red-600'>Delete</span>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default DragAndDrop
