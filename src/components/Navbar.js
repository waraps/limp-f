import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import './Navbar.css'
import Logo from '../assets/img/logo.png'

import { open, close } from '../redux/slices/toogleSlice';

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
                    toggle ? <p onClick={openToogle} className='toggle-box'>X</p> 
                           : <p onClick={closeToggle} className='toggle-box'>=</p>
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
