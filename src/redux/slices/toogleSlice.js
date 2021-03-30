import { createSlice } from "@reduxjs/toolkit";

export const toogleSlice = createSlice({
    name: 'toggle',
    initialState: {
        isOpen: false,
    },
    reducers: {
        open: state => {
            state.isOpen = !state.isOpen
        },
        close: state => {
            state.isOpen = !state.isOpen
        }
    }
})

export const { open, close } = toogleSlice.actions

export default toogleSlice.reducer