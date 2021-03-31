import React from 'react'
import './Loader.css'

export default function Loader() {
    return (
        <div className='container-loader'>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
            <h3 className='loader-info'>Cargando ..</h3>
        </div>
    )
}