import { createSlice } from "@reduxjs/toolkit";

import auth from '../../api/auth'

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loading: false,
        user: null,
        error: null,
    },
    reducers: {
        loginRequest: (state) => {
            state.loading = true
        },
        loginSuccess: (state, action) => {
            state.loading = false
            state.user = action.payload
        },
        loginError: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export const { loginRequest, loginSuccess, loginError } = loginSlice.actions

export const userData = state => state.login

export const loginFetch = (credentials, history) =>  async dispatch => {
    try {
        dispatch(loginRequest())
        const response = await auth.signIn(credentials)
        const {employee, access_token, refresh_token} = response.data
        const user = JSON.stringify(employee)
        localStorage.setItem('user', user)
        localStorage.setItem('token', access_token)
        localStorage.setItem('refresh', refresh_token)
        dispatch(loginSuccess(employee))
        history.replace('/')
    } catch (error) {
        const { message } = error.response.data
        dispatch(loginError(message))
    }
}

export default loginSlice.reducer