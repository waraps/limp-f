import { configureStore } from "@reduxjs/toolkit";
import toogleReducer from './toogleSlice'
import loginReducer from './loginSlice'
import logoutReducer from './logoutSlice'

export default configureStore({
    reducer: {
        toogle: toogleReducer,
        login: loginReducer,
        logout: logoutReducer,
    }
})