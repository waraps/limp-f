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
        'ID',
        'Nombre',
        'Direccion',
        'Correo',
        'Telefono',
        'Registro',
    ]

    const data = !stores ? null : stores.map(store => {
        return {
            id: store.id,
            name: store.name ? store.name : '-',
            address: store.address ? store.address : '-',
            mail: store.mail ? store.mail : '-',
            phone: store.phone ? store.phone: '-',
            created_at: store.created_at ? store.created_at : '-'
        }
    })

    useEffect(() => {
        dispatch(getStores())
    }, [])

    return loading ? 
                        <Loader /> 
                    : 
                        <>
                            <h1>Tiendas</h1>
                            <br />
                            <DataTable
                                tablename='Tiendas'
                                data={data}
                                columns={columns} 
                            />
                            {error && <div>{error}</div>}
                        </>
}