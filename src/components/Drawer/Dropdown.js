import React, {useState} from 'react'
import {Link} from "react-router-dom";

export default function Dropdown({icon, name, routes}) {
    const [open, setOpen] = useState(false)

    const openDropdown = () => {
        setOpen(!open)
    }
    return (
        <div
            className={open ? 'drawer-options-list-item-active' : 'drawer-options-list-item'}
        >   
                <div
                    className='drawer-options-list-item-children-title' 
                    onClick={openDropdown}
                >
                    {icon} {name} {open ? <span>&#128314;</span> : <span>&#128315;</span>}
                </div>
                { 
                    <ul 
                        className={open
                                        ?   'drawer-options-list-item-children-box-visible' 
                                        :   'drawer-options-list-item-children-box'
                                    }
                    >
                        {
                             routes.map((route, index) => {
                                return (
                                    <li key={index}>
                                        <Link
                                            className='drawer-options-list-item-child'
                                            to={route.path}
                                        >
                                            {route.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                }
        </div>
    )
}
