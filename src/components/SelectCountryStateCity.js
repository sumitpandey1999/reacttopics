import React, { useState } from 'react'

const SelectCountryStateCity = () => {

    const [countries, setCountries] = useState(null)
    const [state, setState] = useState(null)
    const [city, setCity] = useState(null)


    console.log(countries)
    console.log(state)
    console.log(city)

    const data = {
        countries: [
            {
                id: 1,
                name: "Country1",
                states: [
                    {
                        id: 1,
                        name: "State1",
                        cities: [
                            { id: 1, name: "City1" },
                            { id: 2, name: "City2" },
                            { id: 3, name: "City3" }
                        ]
                    },
                    {
                        id: 2,
                        name: "State2",
                        cities: [
                            { id: 4, name: "City4" },
                            { id: 5, name: "City5" }
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: "Country2",
                states: [
                    {
                        id: 3,
                        name: "State3",
                        cities: [
                            { id: 6, name: "City6" },
                            { id: 7, name: "City7" }
                        ]
                    }
                ]
            }
        ]
    };



    const getCountries = () => {
        return (data.countries.map((item, index) => {
            return (
                <option key={index} value={item.name}>{item.name}</option>
            )
        }))
    }

   const getState = () =>{
    if(!countries) return []
    const selectedCountry = data.countries.find((item)=>{
       return  item.name === setCountries
    })
    
   }

    return (
        <div>
            <select
                name="country" id="country"
                onChange={(e) => setCountries(e.target.value)}
                value={countries}
            >
                <option value="">Select Country</option>
                {getCountries()}
            </select>

            <select
                onChange={(e) => setState(e.target.value)}
                value={state}
                name="state" id="state">
                <option value="">Select State</option>
            </select>


            <select
                onChange={(e) => { setCity(e.target.value) }}
                value={city}
                name="city" id="city">
                <option value="">Select City</option>
            </select>
        </div>
    )
}

export default SelectCountryStateCity
