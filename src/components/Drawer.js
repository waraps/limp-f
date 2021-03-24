import React from 'react'
import './Drawer.css'

import {Link} from "react-router-dom";

export default function Drawer({nav}) {
    return (
        <nav className='drawer-container'>
            <div className='drawer-title'>
                <h2>Hola, Jesus &#x1F44B;</h2>
            </div>
            <div className='drawer-separator'></div>
            <div className='drawer-options'>
                <ul className='drawer-options-list'>
                    {
                        nav.map((route, index) => {
                            return (
                                    <li key={index}>
                                        <Link
                                            className='drawer-options-list-item'
                                            to={route.path}
                                        >
                                            {route.icon} {route.name}
                                        </Link>
                                    </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='drawer-separator'></div>
            <div className='drawer-config'>
                <ul className='drawer-options-list'>
                    <li>
                        <Link
                            className='drawer-options-list-item'
                            to='/Cambiar'
                        >
                            *- Cambiar Contrasena
                        </Link>
                    </li>
                    <li className='drawer-options-list-item' 
                        onClick={() => alert('Adios')}
                    >
                        *- Cerrar Sesion
                    </li>
                </ul>
            </div>
        </nav>
    )
}
