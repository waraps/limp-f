import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";

import { clientData, getClients } from '../../redux/slices/clientSlice';

// components
import Loader from '../../components/Loader/Loader'
import DataTable from '../../components/DataTable/DataTable'

export default function Clients() {
    const dispatch = useDispatch()
    const { loading, error, clients } = useSelector(clientData)

    const columns = [
        'ID',
        'Nombre',
        'Apellido',
        'Correo',
        'Telefono',
        'Cedula',
        'Registrado'
    ]

    const data = !clients ? null : clients.map(client => {
        return {
            id: client.id,
            name: client.name,
            lastname: client.lastname,
            mail: client.mail,
            phone: client.phone,
            dni: client.dni,
            created_at: client.created_at
        }
    })

    useEffect(() => {
        dispatch(getClients())
    }, [])

    return loading ? 
                        <Loader /> 
                    : 
                        <>
                            <h1>Clientes</h1>
                            <br />
                            <DataTable
                                tablename='Productos'
                                data={data}
                                columns={columns} 
                            />
                            {error && <div>{error}</div>}
                        </>
}