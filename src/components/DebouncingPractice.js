import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showSearchSuggestion } from '../utils/searchSlice'

const DebouncingPractice = () => {

    const dispatch = useDispatch()

    const searchSuggestion = useSelector((store) => store.search)
    // console.log(searchSuggestion)

    const [searchQuery, setSearchQuery] = useState("")
    const [showSuggestion, setShowSuggestion] = useState([])
    const [displaySuggestion, setDisplaySuggestion] = useState(false)

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const getSuggestion = async () => {
        const suggestionData = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + searchQuery)
        const jsonData = await suggestionData.json();
        console.log(jsonData[1])
        setShowSuggestion(jsonData[1])
        dispatch(showSearchSuggestion(
            {
                [searchQuery] :jsonData[1]
            }
        ))
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if(searchSuggestion[searchQuery]){
                setShowSuggestion(searchSuggestion[searchQuery])
            }else{
                getSuggestion()
            }
         
        }, 300)
        return () => {
            clearTimeout(timer)
        }

    }, [searchQuery])

    return (
        <div>
            <input
                className='bg-slate-300'
                type="text"
                onChange={handleChange}
                value={searchQuery}
                onFocus={()=>setDisplaySuggestion(true)}
                onBlur={()=>setDisplaySuggestion(false)}
            />
            <button
                className='bg-red-500'
            >Search here</button>

            <div>
                {
                    displaySuggestion && showSuggestion.map((data, index) => {
                        return (
                            <h4 key={index}>{data}</h4>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DebouncingPractice
