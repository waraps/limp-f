import React from 'react'
import './Navbar.css'
import Logo from '../assets/img/logo.png'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <h1 className='navbar-title'>Limp!</h1>
            <img 
                src={Logo} 
                alt='logo' 
                className='navbar-logo'
            />
        </nav>
    )
}
