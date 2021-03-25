import React from 'react'
import {useHistory} from 'react-router-dom'
import {Link} from "react-router-dom";
import './Drawer.css'

// components
import Dropdown from './Dropdown'

export default function Drawer({nav}) {
    const history = useHistory();

    const logout = () => {
        setTimeout(() => {
            localStorage.clear()
            history.replace('/login')
        }, 1000);
    }
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
                                        {
                                            route.children ? 
                                                            <Dropdown 
                                                                icon={route.icon} 
                                                                name={route.name} 
                                                                routes={route.children}
                                                            />
                                                        :
                                                            <Link
                                                                className='drawer-options-list-item'
                                                                to={route.path}
                                                            >
                                                                {route.icon} {route.name}
                                                            </Link>
                                        }
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
                        onClick={logout}
                    >
                        *- Cerrar Sesion
                    </li>
                </ul>
            </div>
        </nav>
    )
}
