import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import './Navbar.css'
import Logo from '../../assets/img/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { open, close } from '../../redux/slices/toogleSlice';

export default function Navbar() {
    const toggle = useSelector(state => state.toogle.isOpen)
    const dispatch = useDispatch()

    const openToogle = () => {
        dispatch(open())
    }

    const closeToggle = () => {
        dispatch(close())
    }

    return (
        <header className='navbar'>
            <div className='navbar-toggle'>
                {
                    toggle ? <p onClick={openToogle} className='toggle-box'><FontAwesomeIcon icon={faBars} /></p> 
                           : <p onClick={closeToggle} className='toggle-box'><FontAwesomeIcon icon={faTimes} /></p>
                }
            </div>
            <div className='navbar-info'>
                <h1 className='navbar-title'>Limp!</h1>
                <img 
                    src={Logo} 
                    alt='logo' 
                    className='navbar-logo'
                />
            </div>
        </header>
    )
}
