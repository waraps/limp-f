import { createSlice } from "@reduxjs/toolkit";

import client from '../../api/client'

export const clientSlice = createSlice({
    name: 'client',
    initialState: {
        loading: false,
        clients: null,
        client: null,
        error: null,
    },
    reducers: {
        clientRequest: (state) => {
            state.loading = true
        },
        clientsSuccess: (state, action) => {
            state.loading = false
            state.clients = action.payload
        },
        clientSuccess: (state, action) => {
            state.loading = false
            state.client = action.payload
        },
        clientError: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export const { clientRequest, clientSuccess, clientsSuccess, clientError } = clientSlice.actions

export const clientData = state => state.client

export const getClients = () =>  async dispatch => {
    try {
        dispatch(clientRequest())
        const response = await client.getClients()
        const {clients} = response.data
        dispatch(clientsSuccess(clients))
    } catch (error) {
        const { message } = error.response.data
        dispatch(clientError(message))
    }
}

export default clientSlice.reducer