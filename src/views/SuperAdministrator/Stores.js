import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";

import { storeData, getStores } from '../../redux/slices/storeSlice';

// components
import Loader from '../../components/Loader/Loader'
import DataTable from '../../components/DataTable/DataTable'

export default function Stores() {
    const dispatch = useDispatch()
    const { loading, error, stores } = useSelector(storeData)

    const columns = [
        'Nombre',
        'Direccion',
        'Correo',
        'Telefono',
        'Registro'
    ]

    useEffect(() => {
        dispatch(getStores())
        console.log(stores)
    }, [])

    return loading ? 
                        <Loader /> 
                    : 
                        <>
                            <h1>Tiendas</h1>
                            <br />
                            <DataTable
                                tablename='Tiendas'
                                data={stores}
                                columns={columns} 
                            />
                            {error && <div>{error}</div>}
                        </>
}