import React, { useState } from 'react'

const FormValidation = () => {

    const [error, setError] = useState({
        nameError: null,
        emailError: null,
        passwordError: null
    })

    const [details, setdetails] = useState({
        name: "",
        email: "",
        password: ""
    })

    function validation(name, email, password) {
        const emailErrorMessage = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)

        if (name === "") {
            setError((prevState) => ({
                ...prevState, nameError: "Please Enter Valid name"
            }))
        } else {
            setError((prevState) => ({
                ...prevState,
                nameError: ""
            }));
        }

        if (!emailErrorMessage) {
            setError((prevState) => ({
                ...prevState, emailError: "Please Enter Valid Email"
            }))
        } else {
            setError((prevState) => ({
                ...prevState,
                emailError: ""
            }));
        }

        const passwordErrorMessage = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(password)
        if (!passwordErrorMessage) {
            setError((prevState) => ({
                ...prevState, passwordError: "Please Enter Valid pasword"
            }))
        } else {
            setError((prevState) => ({
                ...prevState,
                passwordError: ""
            }));
        }

    }

    const handleSubmit = () => {

        validation(details.name, details.email, details.password)


    }

    return (
        <div>
            <form className='mt-10' onSubmit={(e) => { e.preventDefault() }}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        id='name'
                        type="text"
                        placeholder='Enter Name'
                        onChange={(e) => { setdetails({ ...details, name: (e.target.value) }) }}
                        className='border-2 border-black px-2'
                    />
                    <p className='text-red-600'>{error.nameError}</p>
                </div>

                <div className='mt-2'>
                    <label htmlFor="email">Email</label>
                    <input
                        id='email'
                        type="text"
                        placeholder='Enter your email'
                        value={details.email}
                        onChange={(e) => { setdetails({ ...details, email: (e.target.value) }) }}
                        className='border-2 border-black px-2'
                    />
                    <p className='text-red-600'>{error.emailError}</p>
                </div>


                <div className='mt-2'>
                    <label htmlFor="password">Password</label>
                    <input
                        id='password'
                        type="text"
                        placeholder='Enter your email'
                        className='border-2 border-black px-2'
                        onChange={(e) => { setdetails({ ...details, password: (e.target.value) }) }}
                    />
                    <p className='text-red-600'>{error.passwordError}</p>
                </div>


                <button
                    className='bg-green-600 p-1 rounded-md mt-3'
                    onClick={handleSubmit}
                >Submit</button>

            </form>
        </div>
    )
}

export default FormValidation
