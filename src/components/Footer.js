import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer className='footer-container'>
            <small className='footer-copy'>
                Limp! &copy; {new Date().getFullYear()} - Todos los Derechos Reservados
            </small>
        </footer>
    )
}
