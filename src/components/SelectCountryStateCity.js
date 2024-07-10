import React, { useState } from 'react'
import { data } from '../utils/data'

const SelectCountryStateCity = () => {

const [country, setCountry] = useState("")
console.log(country)

    return (
        <div className='mt-4'>
            <label className='ml-2 font-bold' htmlFor="country">Country</label>
            <select className='ml-2' name="country" id="country" onChange={(e)=>setCountry(e.target.value)}>
                <option value="select">Select</option>
                {data.countries.map((country, index) => {
                    return (
                        <option key={index} value={country?.name}>{country?.name}</option>
                    )
                })}

            </select>


            <label className='ml-2 font-bold' htmlFor="state">State</label>
            <select className='ml-2' name="state" id="state">
                <option value="select">Select</option>

                {data.countries.map((state, index) => {
                    return (
                        <option key={index} value="select">{state?.states.map((stateName) => {
                            return (
                                stateName.name
                            )
                        })}</option>
                    )
                })}

            </select>


            <label className='ml-2 font-bold' htmlFor="city">City</label>
            <select className='ml-2' name="city" id="city">
                <option value="select">Select</option>
            </select>

        </div>
    )
}

export default SelectCountryStateCity
