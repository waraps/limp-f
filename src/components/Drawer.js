import React from 'react'
import './Drawer.css'

export default function Drawer() {
    return (
        <aside className='drawer-container'>
            <div className='drawer-title'>
                <h2>Hola, Jesus &#x1F44B;</h2>
            </div>
            <div className='drawer-separator'></div>
            <div className='drawer-options'>
                <ul className='drawer-options-list'>
                    <li className='drawer-options-list-item'>Opcion 1</li>
                    <li className='drawer-options-list-item'>Opcion 2</li>
                    <li className='drawer-options-list-item'>Opcion 3</li>
                    <li className='drawer-options-list-item'>Opcion 4</li>
                    <li className='drawer-options-list-item'>Opcion 5</li>
                    <div className='drawer-options-list-item'>
                    <li>Opcion 6</li>
                    </div>
                </ul>
            </div>
            <div className='drawer-separator'></div>
            <div className='drawer-config'>
                <ul className='drawer-options-list'>
                    <li className='drawer-options-list-item'>Cambiar Contrasena</li>
                    <li className='drawer-options-list-item'>Cerrar Sesion</li>
                </ul>
            </div>
        </aside>
    )
}
