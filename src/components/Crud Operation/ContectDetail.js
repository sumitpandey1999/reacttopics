import React from 'react'
import { useState } from 'react'

const ContectDetail = () => {

    const [contactList, setContactList] = useState([])
    const [editing, setEditing] = useState(false)

    const [details, setDetails] = useState(
        {
            id: "",
            name: "",
            email: ""
        }
    )



    const handleSubmit = () => {
        if (!details.name && details.email) {
            return null
        }

        if (editing) {
            const updatedList = contactList.map((data, index) => {
                return (
                    data.id === details.id ? { ...details } : data)
            })
            setContactList(updatedList)
            setDetails({ id: "", name: "", email: "" })
            setEditing(false)
        } else {
            setContactList([...contactList, { ...details, id: Date.now() }])
        }
    }

    const handleEdit = (id) => {
        const findId = contactList.find((data) => {
            return (
                data.id === id
            )
        })
        console.log(findId)
        if (findId) {
            setDetails({ id: findId.id, name: findId.name, email: findId.email })
        }
        setEditing(true)

    }

    const handleDelete =(id)=>{
        setContactList(contactList.filter((data)=>{
            return(
                data.id!==id
            )
        }))
    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label className='font-bold' htmlFor="name" >Name</label>
                <input
                    type="text" id='name'
                    className='px-1 ml-2 border-2 border-red-500'
                    value={details.name}
                    onChange={(e) => setDetails((preValue) => {
                        return ({
                            ...preValue, name: (e.target.value)
                        })
                    })}
                />


                <label className='px-1 ml-1 font-bold' htmlFor="email">Email</label>
                <input
                    className='px-1 ml-2 border-2 border-red-500'
                    type="text" id='email'
                    value={details.email}
                    onChange={(e) => setDetails((preValue) => {
                        return ({
                            ...preValue, email: (e.target.value)
                        })
                    })}
                />
                <button
                    onClick={() => handleSubmit()}
                    className='bg-yellow-400 ml-2 px-2 rounded-md font-bold'>Submit</button>
            </form>


            <div className='w-80 mt-10'>
                <h1 className='font-bold'>Contact List</h1>
                <ul>
                    {
                        contactList.map((data, index) => {
                            return (
                                <div className='w-auto ml-16 border-2 border-red-300 mt-2' key={data.id}>
                                    <li>{data.name}</li>
                                    <li>{data.email}</li>
                                    <button
                                        className='mr-1 bg-yellow-300 px-1 rounded-md'
                                        onClick={() => handleEdit(data.id)}

                                    >Edit</button>
                                    <button
                                    onClick={()=>handleDelete(data.id)}
                                     className='mr-1 bg-yellow-300 px-1 rounded-md'>Delete</button>
                                </div>

                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ContectDetail
