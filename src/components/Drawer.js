import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'
import {Link} from "react-router-dom";
import './Drawer.css'

import { userData } from "../redux/loginSlice";
import { logoutFetch } from '../redux/logoutSlice'

// components
import Dropdown from './Dropdown'

export default function Drawer({nav}) {
    const dispatch = useDispatch()
    const toggle = useSelector(state => state.toogle.isOpen)
    const { user } = useSelector(userData)
    const history = useHistory();

    const logout = () => {
        dispatch(logoutFetch(history))
    }
    return (
        <nav className={toggle ? 'drawer-container-visible' : 'drawer-container'}>
            <div className='drawer-title'>
                {user ? <h2>Hola, {user.name} &#x1F44B;</h2> : <h2>Hola, bienvenido &#x1F44B;</h2>}
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
