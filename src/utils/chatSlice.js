import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[]
    }, 
    reducers:{
        addMessage:(state, action)=>{
            state.messages.splice(10,1)
        state.messages.push(action.payload)
   
        }
    }
})


export const {addMessage} = searchSlice.actions
export default searchSlice.reducer