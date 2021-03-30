import { configureStore } from "@reduxjs/toolkit";
import toogleReducer from './slices/toogleSlice'
import loginReducer from './slices/loginSlice'
import logoutReducer from './slices/logoutSlice'
import storeReducer from './slices/storeSlice'
import productReducer from './slices/productSlice'
import clientReducer from './slices/clientSlice'

export default configureStore({
    reducer: {
        toogle: toogleReducer,
        login: loginReducer,
        logout: logoutReducer,
        store: storeReducer,
        product: productReducer,
        client: clientReducer,
    }
})