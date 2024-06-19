import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{},
    reducers:{
        showSearchSuggestion:(state, action)=>{
           state= Object.assign(state, action.payload)    
        }
    }
})

export const {showSearchSuggestion} = searchSlice.actions
export default searchSlice.reducer