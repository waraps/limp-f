import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";

import { storeData, getStores } from '../../redux/slices/storeSlice';

// components
import Loader from '../../components/Loader/Loader'

export default function Stores() {
    const dispatch = useDispatch()
    const { loading, error, stores } = useSelector(storeData)

    useEffect(() => {
        dispatch(getStores())
    }, [])

    return loading ? <Loader /> : (
        <div>
            {
                stores ? 
                            stores.map(store => {
                                return <div key={store.id}>{store.name}</div>
                            })
                        :
                        <div>No hay Tiendas que mostrar</div>
            }
            {error && <div>{error}</div>}
        </div>
    )
}