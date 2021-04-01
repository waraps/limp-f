import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";

import { productData, getProducts } from '../../redux/slices/productSlice';

// components
import Loader from '../../components/Loader/Loader'
import DataTable from '../../components/DataTable/DataTable'

// utils
import formatNumber from '../../utils/formatNumber'

export default function Products() {
    const dispatch = useDispatch()
    const { loading, error, products } = useSelector(productData)

    const columns = [
        'ID',
        'Nombre',
        'Precio',
        'Registrado',
    ]

    const data = !products ? null : products.map(product => {
        return {
            id: product.id,
            name: product.name ? product.name : '-',
            address: product.price ? formatNumber(product.price, '$') : '-',
            created_at: product.created_at ? product.created_at : '-'
        }
    })

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return loading ? 
                        <Loader /> 
                    : 
                        <>
                            <h1>Productos</h1>
                            <br />
                            <DataTable
                                tablename='Productos'
                                data={data}
                                columns={columns} 
                            />
                            {error && <div>{error}</div>}
                        </>
}