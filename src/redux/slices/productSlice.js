import { createSlice } from "@reduxjs/toolkit";

import product from '../../api/product'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        products: null,
        product: null,
        error: null,
    },
    reducers: {
        productRequest: (state) => {
            state.loading = true
        },
        productsSuccess: (state, action) => {
            state.loading = false
            state.products = action.payload
        },
        productSuccess: (state, action) => {
            state.loading = false
            state.product = action.payload
        },
        productError: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export const { productRequest, productSuccess, productsSuccess, productError } = productSlice.actions

export const productData = state => state.product

export const getProducts = () =>  async dispatch => {
    try {
        dispatch(productRequest())
        const response = await product.getProducts()
        const {products} = response.data
        dispatch(productsSuccess(products))
    } catch (error) {
        const { message } = error.response.data
        dispatch(productError(message))
    }
}

export default productSlice.reducer