import {createSlice} from "@reduxjs/toolkit"

const initialState={
    data:[]
}
export const musiclistslice =createSlice({
    name : "music",
    initialState,
    reducers:{

    }
})

export const {} = musiclistslice.actions
export default musiclistslice.reducer