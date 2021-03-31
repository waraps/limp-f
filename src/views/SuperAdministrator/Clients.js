import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";

import { clientData, getClients } from '../../redux/slices/clientSlice';

// components
import Loader from '../../components/Loader/Loader'

export default function Clients() {
    const dispatch = useDispatch()
    const { loading, error, clients } = useSelector(clientData)

    useEffect(() => {
        dispatch(getClients())
    }, [])

    return loading ? <Loader /> : (
        <div>
            {
                clients ? 
                            clients.map(client => {
                                return <div key={client.id}>{client.name}</div>
                            })
                        :
                        <div>No hay Clientes que mostrar</div>
            }
            {error && <div>{error}</div>}
        </div>
    )
}