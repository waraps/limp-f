import { createSlice } from "@reduxjs/toolkit";

import employee from '../../api/employee'

export const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        loading: false,
        employees: null,
        employee: null,
        error: null,
    },
    reducers: {
        employeeRequest: (state) => {
            state.loading = true
        },
        employeesSuccess: (state, action) => {
            state.loading = false
            state.employees = action.payload
        },
        employeeSuccess: (state, action) => {
            state.loading = false
            state.employee = action.payload
        },
        employeeError: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export const { employeeRequest, employeeSuccess, employeesSuccess, employeeError } = employeeSlice.actions

export const employeeData = state => state.employee

export const getEmployees = () =>  async dispatch => {
    try {
        dispatch(employeeRequest())
        const response = await employee.getEmployees()
        const {employees} = response.data
        dispatch(employeesSuccess(employees))
    } catch (error) {
        const { message } = error.response.data
        dispatch(employeeError(message))
    }
}

export default employeeSlice.reducer