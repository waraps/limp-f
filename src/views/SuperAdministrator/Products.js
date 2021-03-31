import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";

import { productData, getProducts } from '../../redux/slices/productSlice';

// components
import Loader from '../../components/Loader/Loader'

export default function Products() {
    const dispatch = useDispatch()
    const { loading, error, products } = useSelector(productData)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return loading ? <Loader /> : (
        <div>
            {
                products ? 
                            products.map(product => {
                                return <div key={product.id}>{product.name}</div>
                            })
                        :
                        <div>No hay Products que mostrar</div>
            }
            {error && <div>{error}</div>}
        </div>
    )
}