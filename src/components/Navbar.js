import React, {useState} from 'react'
import './Navbar.css'
import Logo from '../assets/img/logo.png'

export default function Navbar() {
    const [toggle, setToggle] = useState(true)

    const open = () => {
        setToggle(!toggle)
    }

    return (
        <nav className='navbar'>
            <div className='navbar-toggle'>
                {
                    toggle ? <p onClick={open} className='toggle-box'>=</p> 
                           : <p onClick={open} className='toggle-box'>X</p>
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
        </nav>
    )
}
