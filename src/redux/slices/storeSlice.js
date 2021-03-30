import { createSlice } from "@reduxjs/toolkit";

import store from '../../api/store'

export const storeSlice = createSlice({
    name: 'store',
    initialState: {
        loading: false,
        stores: null,
        store: null,
        error: null,
    },
    reducers: {
        storeRequest: (state) => {
            state.loading = true
        },
        storesSuccess: (state, action) => {
            state.loading = false
            state.stores = action.payload
        },
        storeSuccess: (state, action) => {
            state.loading = false
            state.store = action.payload
        },
        storeError: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export const { storeRequest, storeSuccess, storesSuccess, storeError } = storeSlice.actions

export const storeData = state => state.store

export const getStores = () =>  async dispatch => {
    try {
        dispatch(storeRequest())
        const response = await store.getStores()
        const {stores} = response.data
        dispatch(storesSuccess(stores))
    } catch (error) {
        const { message } = error.response.data
        dispatch(storeError(message))
    }
}

export default storeSlice.reducer