import { createSlice } from "@reduxjs/toolkit";

export const logoutSlice = createSlice({
    name: 'logout',
    initialState: {
        loading: false,
        error: null,
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
            history.replace('/login')
            dispatch(logoutSuccess())
            localStorage.clear()
        }, 1000);
    } catch (error) {
        const { message } = error.response.data
        dispatch(logoutError(message))
    }
}

export default logoutSlice.reducer