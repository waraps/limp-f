import { createSlice } from "@reduxjs/toolkit";

export const logoutSlice = createSlice({
    name: 'logout',
    initialState: {
        loading: false,
        error: false,
    },
    reducers: {
        logoutRequest: state => {
            state.loading = true
        },
        logoutSuccess: state => {
            state.loading = false
        },
        logoutError: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export const { logoutRequest, logoutSuccess, logoutError } = logoutSlice.actions

export const logoutStatus = state => state.logout

export const logoutFetch =  (history) =>  dispatch => {
    try {
        dispatch(logoutRequest())
        setTimeout(() => {
            // const response = await 
            localStorage.clear()
            dispatch(logoutSuccess())
            history.replace('/login')
        }, 1000);
    } catch (error) {
        dispatch(logoutError(error))
    }
}

export default logoutSlice.reducer