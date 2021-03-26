import { configureStore } from "@reduxjs/toolkit";
import toogleReducer from './toogleSlice'

export default configureStore({
    reducer: {
        toogle: toogleReducer
    }
})